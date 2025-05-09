import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { spawn } from "child_process";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get current file path for ES modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  // Start Flask application in a child process
  const flaskProcess = spawn("python3", [path.resolve(__dirname, "flask_app.py")], {
    stdio: "inherit"
  });
  
  // Handle Flask process close
  flaskProcess.on("close", (code) => {
    console.log(`Flask process exited with code ${code}`);
  });
  
  // Proxy API requests to Flask server
  app.use("/api/predict", async (req, res) => {
    try {
      const response = await fetch("http://localhost:8000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      });
      
      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Error forwarding request to Flask:", error);
      res.status(500).json({ error: "Failed to connect to prediction service" });
    }
  });

  const httpServer = createServer(app);
  
  // Properly terminate Flask process when Node.js server exits
  process.on("exit", () => {
    flaskProcess.kill();
  });
  
  // Handle signals
  process.on("SIGINT", () => {
    flaskProcess.kill();
    process.exit();
  });
  
  process.on("SIGTERM", () => {
    flaskProcess.kill();
    process.exit();
  });

  return httpServer;
}
