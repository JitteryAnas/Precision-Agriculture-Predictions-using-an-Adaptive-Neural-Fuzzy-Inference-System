from flask import Flask, request, jsonify
import os
import sys
from pathlib import Path

# Add current directory to path so we can import the models module
current_dir = Path(__file__).parent
sys.path.append(str(current_dir))

# Import the model
from models import anfis_model

app = Flask(__name__)

# CORS handling for development
@app.after_request
def add_cors_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/api/predict', methods=['POST'])
def predict():
    if request.method == 'OPTIONS':
        return jsonify({})
        
    try:
        data = request.get_json()
        
        # Validate input data
        required_fields = ['temperature', 'rainfall', 'humidity', 'ph']
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400
        
        # Get values from request
        temperature = float(data['temperature'])
        rainfall = float(data['rainfall'])
        humidity = float(data['humidity'])
        ph = float(data['ph'])
        
        # Input validation
        if not (0 <= temperature <= 50):
            return jsonify({"error": "Temperature must be between 0 and 50°C"}), 400
        if not (0 <= rainfall <= 500):
            return jsonify({"error": "Rainfall must be between 0 and 500mm"}), 400
        if not (0 <= humidity <= 100):
            return jsonify({"error": "Humidity must be between 0 and 100%"}), 400
        if not (0 <= ph <= 14):
            return jsonify({"error": "pH must be between 0 and 14"}), 400
        
        # Get prediction from ANFIS model
        result = anfis_model.predict(temperature, rainfall, humidity, ph)
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port)
