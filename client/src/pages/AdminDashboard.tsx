import { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Import uniquement ce dont nous avons besoin

type PredictionStats = {
  totalPredictions: number;
  lastWeekPredictions: number;
  growthRate: number;
}

type FeedbackStats = {
  positiveCount: number;
  negativeCount: number;
  averageRating: number;
}

type RegionData = {
  name: string;
  predictions: number;
  crops: string;
}

// Simulated data
const predictionStats: PredictionStats = {
  totalPredictions: 4652,
  lastWeekPredictions: 342,
  growthRate: 8.5
};

const feedbackStats: FeedbackStats = {
  positiveCount: 876,
  negativeCount: 124,
  averageRating: 4.2
};

const monthlyPredictions = [
  { name: "Jan", predictions: 320 },
  { name: "Feb", predictions: 410 },
  { name: "Mar", predictions: 390 },
  { name: "Apr", predictions: 480 },
  { name: "May", predictions: 520 },
  { name: "Jun", predictions: 610 },
  { name: "Jul", predictions: 680 },
  { name: "Aug", predictions: 750 },
  { name: "Sep", predictions: 840 },
  { name: "Oct", predictions: 920 },
  { name: "Nov", predictions: 780 },
  { name: "Dec", predictions: 630 }
];

const predictionTypeData = [
  { name: "Irrigation", value: 2450 },
  { name: "Crop Selection", value: 1380 },
  { name: "Soil Amendment", value: 850 }
];

const regionalData: RegionData[] = [
  { name: "Rabat-Salé", predictions: 782, crops: "Wheat, Corn" },
  { name: "Marrakech", predictions: 645, crops: "Olives, Dates" },
  { name: "Fez", predictions: 590, crops: "Barley, Chickpeas" },
  { name: "Tangier", predictions: 428, crops: "Vegetables, Fruits" },
  { name: "Agadir", predictions: 810, crops: "Citrus, Tomatoes" },
  { name: "Casablanca", predictions: 595, crops: "Mixed" },
  { name: "Oujda", predictions: 402, crops: "Barley, Olives" }
];

const topCrops = [
  { name: "Wheat", count: 950 },
  { name: "Olives", count: 870 },
  { name: "Corn", count: 780 },
  { name: "Barley", count: 650 },
  { name: "Citrus", count: 590 }
];

const systemLogs = [
  { timestamp: "2023-11-24 08:23:45", level: "INFO", message: "New prediction generated for user #1052" },
  { timestamp: "2023-11-24 10:15:32", level: "WARNING", message: "Unusual temperature pattern detected in Fez region" },
  { timestamp: "2023-11-24 12:42:18", level: "INFO", message: "Database backup completed successfully" },
  { timestamp: "2023-11-24 14:35:11", level: "ERROR", message: "API rate limit exceeded for external weather data" },
  { timestamp: "2023-11-24 16:28:45", level: "INFO", message: "System parameters updated for winter season" },
  { timestamp: "2023-11-24 18:14:22", level: "INFO", message: "10 new users registered today" },
  { timestamp: "2023-11-24 20:09:37", level: "WARNING", message: "CPU usage spike detected - optimizing query performance" },
  { timestamp: "2023-11-24 22:53:19", level: "INFO", message: "Daily analytics report generated" }
];

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Simple auth simulation - in a real app this would be properly secured
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Identifiants incorrects");
    }
  };

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Admin Login - AgriFuzzy</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#4CAF50] p-6 text-white">
              <h1 className="text-2xl font-montserrat font-bold flex items-center">
                <i className="fas fa-lock mr-2"></i> Admin Dashboard
              </h1>
              <p className="mt-1 text-green-100">Accès réservé aux administrateurs</p>
            </div>
            
            <form onSubmit={handleLogin} className="p-6 space-y-4">
              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                  {loginError}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Entrez votre nom d'utilisateur"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#4CAF50] hover:bg-green-600"
              >
                Se connecter
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                <i className="fas fa-info-circle mr-1"></i> Pour la démo, utilisez: admin / admin123
              </p>
            </form>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tableau de Bord Admin - AgriFuzzy</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-montserrat font-bold text-gray-900 flex items-center">
                <i className="fas fa-chart-line text-[#4CAF50] mr-2"></i> Tableau de Bord Administrateur
              </h1>
              <p className="text-gray-600">Visualisez les statistiques et l'activité du système AgriFuzzy</p>
            </div>
            
            <Button 
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="flex items-center"
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Déconnexion
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Prédictions Totales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-[#4CAF50]">{predictionStats.totalPredictions}</span>
                  <span className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${predictionStats.growthRate >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {predictionStats.growthRate >= 0 ? '+' : ''}{predictionStats.growthRate}%
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {predictionStats.lastWeekPredictions} nouvelles prédictions cette semaine
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Satisfaction Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-[#4CAF50]">{(feedbackStats.positiveCount / (feedbackStats.positiveCount + feedbackStats.negativeCount) * 100).toFixed(1)}%</span>
                    <div className="ml-4 flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i key={star} className={`fas fa-star ${star <= Math.round(feedbackStats.averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Note moyenne: {feedbackStats.averageRating}/5 ({feedbackStats.positiveCount + feedbackStats.negativeCount} avis)
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Régions Actives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-[#4CAF50]">{regionalData.length}</span>
                </div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {regionalData.slice(0, 4).map((region, index) => (
                    <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {region.name}
                    </span>
                  ))}
                  {regionalData.length > 4 && (
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                      +{regionalData.length - 4} autres
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="analytics" className="mb-6">
            <TabsList className="mb-6 bg-white border border-gray-200">
              <TabsTrigger value="analytics">Analytique</TabsTrigger>
              <TabsTrigger value="regional">Données Régionales</TabsTrigger>
              <TabsTrigger value="logs">Logs Système</TabsTrigger>
              <TabsTrigger value="feedback">Feedback Utilisateurs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Prédictions Mensuelles</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={monthlyPredictions}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="predictions" stroke="#4CAF50" fill="#81C784" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Types de Prédictions</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={predictionTypeData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {predictionTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#4CAF50' : index === 1 ? '#81C784' : '#A5D6A7'} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cultures les Plus Recommandées</CardTitle>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topCrops}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" name="Recommandations" fill="#4CAF50" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="regional" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Activité par Région</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="py-3 px-6 text-left font-medium text-gray-500">Région</th>
                          <th className="py-3 px-6 text-left font-medium text-gray-500">Prédictions</th>
                          <th className="py-3 px-6 text-left font-medium text-gray-500">Cultures Recommandées</th>
                          <th className="py-3 px-6 text-left font-medium text-gray-500">Activité</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {regionalData.map((region, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-4 px-6 text-gray-800">{region.name}</td>
                            <td className="py-4 px-6 text-gray-800">{region.predictions}</td>
                            <td className="py-4 px-6 text-gray-800">{region.crops}</td>
                            <td className="py-4 px-6">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-[#4CAF50] h-2.5 rounded-full" 
                                  style={{ width: `${(region.predictions / Math.max(...regionalData.map(r => r.predictions)) * 100).toFixed(0)}%` }}
                                ></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Carte de Chaleur des Prédictions</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center">
                      <img 
                        src="https://images.unsplash.com/photo-1575483893528-1a89e9c1c4a9?auto=format&fit=crop&crop=edges&w=800&h=400"
                        alt="Carte du Maroc avec superposition de chaleur"
                        className="max-w-full h-auto rounded-lg mb-4"
                      />
                      <p className="text-sm text-gray-500 italic">Visualisation des zones avec le plus grand nombre de prédictions</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Distribution des Recommandations</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={regionalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="predictions" name="Prédictions" stroke="#4CAF50" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="logs" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Logs Système</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        <i className="fas fa-download mr-1"></i> Exporter
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        <i className="fas fa-filter mr-1"></i> Filtrer
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead className="bg-gray-50 text-xs uppercase">
                        <tr>
                          <th className="py-3 px-6 text-left font-medium text-gray-500">Timestamp</th>
                          <th className="py-3 px-6 text-left font-medium text-gray-500">Niveau</th>
                          <th className="py-3 px-6 text-left font-medium text-gray-500">Message</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-sm">
                        {systemLogs.map((log, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-3 px-6 text-gray-800 font-mono">{log.timestamp}</td>
                            <td className="py-3 px-6">
                              <span 
                                className={`px-2 py-1 rounded-full text-xs ${
                                  log.level === 'ERROR' ? 'bg-red-100 text-red-800' : 
                                  log.level === 'WARNING' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {log.level}
                              </span>
                            </td>
                            <td className="py-3 px-6 text-gray-800">{log.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Affichage de 8 entrées sur 1245
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        <i className="fas fa-chevron-left"></i>
                      </Button>
                      <Button variant="outline" size="sm">
                        1
                      </Button>
                      <Button variant="outline" size="sm">
                        2
                      </Button>
                      <Button variant="outline" size="sm">
                        3
                      </Button>
                      <Button variant="outline" size="sm">
                        <i className="fas fa-chevron-right"></i>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Moniteur Système</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">CPU</h4>
                        <span className="text-sm font-medium text-green-500">Healthy</span>
                      </div>
                      <div className="flex items-end space-x-1">
                        <span className="text-2xl font-bold">24%</span>
                        <span className="text-sm text-gray-500">utilization</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-[#4CAF50] h-2.5 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Mémoire</h4>
                        <span className="text-sm font-medium text-green-500">Healthy</span>
                      </div>
                      <div className="flex items-end space-x-1">
                        <span className="text-2xl font-bold">42%</span>
                        <span className="text-sm text-gray-500">utilization</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-[#4CAF50] h-2.5 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white border border-gray-200 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Disque</h4>
                        <span className="text-sm font-medium text-yellow-500">Warning</span>
                      </div>
                      <div className="flex items-end space-x-1">
                        <span className="text-2xl font-bold">78%</span>
                        <span className="text-sm text-gray-500">utilization</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Latence API (ms)</h4>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={[
                          { time: "00:00", value: 120 },
                          { time: "04:00", value: 90 },
                          { time: "08:00", value: 150 },
                          { time: "12:00", value: 210 },
                          { time: "16:00", value: 180 },
                          { time: "20:00", value: 130 },
                          { time: "24:00", value: 100 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#4CAF50" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="feedback" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Répartition des Avis</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Très satisfait", value: 456 },
                            { name: "Satisfait", value: 320 },
                            { name: "Neutre", value: 100 },
                            { name: "Insatisfait", value: 80 },
                            { name: "Très insatisfait", value: 44 }
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          <Cell fill="#4CAF50" />
                          <Cell fill="#81C784" />
                          <Cell fill="#A5D6A7" />
                          <Cell fill="#FF8A65" />
                          <Cell fill="#E57373" />
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Évaluation des Fonctionnalités</CardTitle>
                  </CardHeader>
                  <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={[
                          { name: "Interface", rating: 4.5 },
                          { name: "Précision", rating: 4.2 },
                          { name: "Rapidité", rating: 4.7 },
                          { name: "Recommandations", rating: 4.0 },
                          { name: "Documentation", rating: 3.8 }
                        ]}
                        margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 5]} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip formatter={(value) => [`${value}/5`, 'Note']} />
                        <Bar dataKey="rating" fill="#4CAF50" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Commentaires Récents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="text-yellow-400 flex">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-800">Hassan M.</span>
                        <span className="ml-auto text-sm text-gray-500">Il y a 2 jours</span>
                      </div>
                      <p className="text-gray-700">
                        "Les recommandations pour l'irrigation de mon champ d'oliviers étaient très précises.
                        J'ai économisé près de 30% d'eau par rapport à ma méthode habituelle. Excellent outil!"
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="text-yellow-400 flex">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-800">Fatima Z.</span>
                        <span className="ml-auto text-sm text-gray-500">Il y a 5 jours</span>
                      </div>
                      <p className="text-gray-700">
                        "Application très utile pour notre ferme familiale. Les suggestions de cultures étaient adaptées
                        à notre sol. J'aimerais pouvoir ajouter mes propres données météo locales."
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="text-yellow-400 flex">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-800">Ahmed B.</span>
                        <span className="ml-auto text-sm text-gray-500">Il y a 1 semaine</span>
                      </div>
                      <p className="text-gray-700">
                        "Bonne application mais il faudrait plus d'explications sur les calculs.
                        J'ai trouvé les recommandations de fertilisation un peu génériques pour ma région."
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="text-yellow-400 flex">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-800">Karim L.</span>
                        <span className="ml-auto text-sm text-gray-500">Il y a 2 semaines</span>
                      </div>
                      <p className="text-gray-700">
                        "Très impressionné par la précision des prévisions. J'utilise AgriFuzzy pour 
                        planifier l'irrigation de mes agrumes et j'ai constaté une amélioration significative
                        de la qualité des fruits."
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline">
                      Voir plus de commentaires
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;