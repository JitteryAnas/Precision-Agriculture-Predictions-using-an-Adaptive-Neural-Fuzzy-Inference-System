import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Documentation = () => {
  return (
    <>
      <Helmet>
        <title>Documentation Technique - AgriFuzzy</title>
        <meta name="description" content="Documentation technique du modèle ANFIS utilisé par AgriFuzzy pour l'irrigation intelligente et les recommandations agricoles." />
      </Helmet>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-montserrat font-bold text-gray-900">
              Documentation Technique
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment fonctionne notre modèle ANFIS (Adaptive Neuro-Fuzzy Inference System) et comment il génère des recommandations agricoles précises.
            </p>
          </div>
          
          <Tabs defaultValue="model" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="model">Modèle ANFIS</TabsTrigger>
              <TabsTrigger value="data">Données</TabsTrigger>
              <TabsTrigger value="rules">Règles Floues</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="resources">Ressources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="model" className="p-4 bg-white rounded-xl shadow-md">
              <Card>
                <CardHeader>
                  <CardTitle>Le modèle ANFIS</CardTitle>
                  <CardDescription>Une approche hybride combinant réseaux de neurones et logique floue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">Qu'est-ce que ANFIS?</h3>
                      <p className="text-gray-700 mb-4">
                        ANFIS (Adaptive Neuro-Fuzzy Inference System) est un type de réseau neuronal artificiel basé sur le modèle d'inférence floue de Takagi-Sugeno. 
                        Il combine la puissance des réseaux neuronaux avec la transparence des systèmes à base de règles floues.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Notre modèle utilise une architecture à 5 couches :
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li><span className="font-medium">Couche de fuzzification</span> : Transforme les entrées numériques en degrés d'appartenance flous</li>
                        <li><span className="font-medium">Couche de règles</span> : Applique les opérateurs flous (ET, OU) pour former les antécédents des règles</li>
                        <li><span className="font-medium">Couche de normalisation</span> : Calcule le poids normalisé de chaque règle</li>
                        <li><span className="font-medium">Couche de défuzzification</span> : Calcule la contribution de chaque règle à la sortie</li>
                        <li><span className="font-medium">Couche de sortie</span> : Agrège toutes les sorties pour produire une valeur finale</li>
                      </ol>
                    </div>
                    <div className="md:w-1/2">
                      <div className="rounded-xl overflow-hidden shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1507692812060-98338d07aca3?auto=format&fit=crop&w=800&h=500" 
                          alt="Représentation d'un réseau neuronal" 
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 mt-4 border border-green-200">
                        <h4 className="text-lg font-medium text-green-800 mb-2">Avantages d'ANFIS en agriculture</h4>
                        <ul className="list-disc list-inside text-green-700 space-y-1">
                          <li>Gestion de l'incertitude dans les données agricoles</li>
                          <li>Capacité d'apprentissage à partir des données historiques</li>
                          <li>Facilité d'interprétation via les règles floues</li>
                          <li>Adaptation aux conditions climatiques variables</li>
                          <li>Précision supérieure aux modèles traditionnels</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="data" className="p-4 bg-white rounded-xl shadow-md">
              <Card>
                <CardHeader>
                  <CardTitle>Données utilisées</CardTitle>
                  <CardDescription>Sources et préparation des données pour l'entraînement du modèle</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Sources de données</h3>
                      <p className="text-gray-700 mb-4">
                        Notre modèle est entraîné sur des données provenant de multiples sources :
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        <li>Stations météorologiques de diverses régions agricoles du Maroc (2015-2023)</li>
                        <li>Données satellites de surveillance des cultures (NDVI, NDWI)</li>
                        <li>Analyses de sol de parcelles agricoles représentatives</li>
                        <li>Enregistrements historiques d'irrigation et de rendement des cultures</li>
                        <li>Rapports d'experts agronomes locaux</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4">Préparation des données</h3>
                      <p className="text-gray-700">
                        Les données ont été nettoyées, normalisées et augmentées pour assurer la robustesse du modèle.
                        Des techniques de validation croisée ont été utilisées pour évaluer la performance sur différents
                        types de sols et conditions climatiques.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Variables d'entrée</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg overflow-hidden">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="py-3 px-4 text-left font-medium text-gray-800">Variable</th>
                              <th className="py-3 px-4 text-left font-medium text-gray-800">Plage</th>
                              <th className="py-3 px-4 text-left font-medium text-gray-800">Unité</th>
                              <th className="py-3 px-4 text-left font-medium text-gray-800">Impact</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr>
                              <td className="py-2 px-4 text-gray-700">Température</td>
                              <td className="py-2 px-4 text-gray-700">0-50</td>
                              <td className="py-2 px-4 text-gray-700">°C</td>
                              <td className="py-2 px-4 text-gray-700">Élevé</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-700">Précipitations</td>
                              <td className="py-2 px-4 text-gray-700">0-500</td>
                              <td className="py-2 px-4 text-gray-700">mm</td>
                              <td className="py-2 px-4 text-gray-700">Très élevé</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-700">Humidité</td>
                              <td className="py-2 px-4 text-gray-700">0-100</td>
                              <td className="py-2 px-4 text-gray-700">%</td>
                              <td className="py-2 px-4 text-gray-700">Moyen</td>
                            </tr>
                            <tr>
                              <td className="py-2 px-4 text-gray-700">pH du sol</td>
                              <td className="py-2 px-4 text-gray-700">0-14</td>
                              <td className="py-2 px-4 text-gray-700">-</td>
                              <td className="py-2 px-4 text-gray-700">Moyen</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h4 className="text-lg font-medium text-blue-800 mb-2">Précision du modèle</h4>
                        <p className="text-blue-700 mb-2">
                          Notre modèle ANFIS atteint une précision de 85% sur les données de test, avec les métriques suivantes:
                        </p>
                        <ul className="list-disc list-inside text-blue-700">
                          <li>Erreur quadratique moyenne (MSE): 0.042</li>
                          <li>R² (coefficient de détermination): 0.87</li>
                          <li>Précision des recommandations: 85%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rules" className="p-4 bg-white rounded-xl shadow-md">
              <Card>
                <CardHeader>
                  <CardTitle>Règles floues</CardTitle>
                  <CardDescription>Exploration des règles linguistiques qui gouvernent le système</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Comment fonctionnent les règles floues</h3>
                    <p className="text-gray-700 mb-4">
                      Les règles floues traduisent l'expertise humaine en langage mathématique, permettant au système de raisonner
                      avec des concepts imprécis comme "température élevée" ou "sol légèrement acide".
                    </p>
                    <p className="text-gray-700 mb-6">
                      Chaque règle prend la forme "SI (condition) ALORS (conséquence)", où les conditions peuvent être combinées
                      avec des opérateurs comme ET, OU.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Exemples de règles floues pour l'irrigation</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-white rounded-md shadow-sm border-l-4 border-green-500">
                        <p className="font-medium">SI (Température est haute) ET (Précipitations sont basses) ET (Humidité est basse) ALORS (Irrigation est haute)</p>
                      </div>
                      <div className="p-3 bg-white rounded-md shadow-sm border-l-4 border-yellow-500">
                        <p className="font-medium">SI (Température est moyenne) ET (Précipitations sont moyennes) ET (Humidité est moyenne) ALORS (Irrigation est moyenne)</p>
                      </div>
                      <div className="p-3 bg-white rounded-md shadow-sm border-l-4 border-blue-500">
                        <p className="font-medium">SI (Température est basse) ET (Précipitations sont hautes) ET (Humidité est haute) ALORS (Irrigation est basse)</p>
                      </div>
                      <div className="p-3 bg-white rounded-md shadow-sm border-l-4 border-purple-500">
                        <p className="font-medium">SI (Température est haute) ET (Précipitations sont hautes) ET (Humidité est moyenne) ALORS (Irrigation est basse)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Variables linguistiques</h3>
                      <p className="text-gray-700 mb-4">
                        Chaque variable d'entrée est divisée en ensembles flous qui représentent des concepts linguistiques:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-800">Température:</h4>
                          <ul className="list-disc list-inside text-gray-700">
                            <li>Basse: 0-20°C</li>
                            <li>Moyenne: 15-35°C</li>
                            <li>Haute: 30-50°C</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-800">Précipitations:</h4>
                          <ul className="list-disc list-inside text-gray-700">
                            <li>Basses: 0-150mm</li>
                            <li>Moyennes: 100-300mm</li>
                            <li>Hautes: 250-500mm</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-800">Humidité:</h4>
                          <ul className="list-disc list-inside text-gray-700">
                            <li>Basse: 0-40%</li>
                            <li>Moyenne: 30-70%</li>
                            <li>Haute: 60-100%</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-800">pH du sol:</h4>
                          <ul className="list-disc list-inside text-gray-700">
                            <li>Acide: 0-6.5</li>
                            <li>Neutre: 5.5-8.5</li>
                            <li>Alcalin: 7.5-14</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Fonctions d'appartenance</h3>
                      <p className="text-gray-700 mb-4">
                        Les fonctions d'appartenance déterminent à quel degré une valeur appartient à un ensemble flou.
                        Nous utilisons principalement des fonctions triangulaires pour leur simplicité et efficacité.
                      </p>
                      
                      <div className="rounded-xl overflow-hidden shadow-md mt-4">
                        <img 
                          src="https://miro.medium.com/v2/resize:fit:1400/1*oGrE_K_p5pQQPdbX3UD-7Q.png" 
                          alt="Fonctions d'appartenance floues" 
                          className="w-full h-auto"
                        />
                      </div>
                      
                      <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
                        <h4 className="text-lg font-medium text-amber-800 mb-2">Le saviez-vous?</h4>
                        <p className="text-amber-700">
                          Une valeur peut appartenir partiellement à plusieurs ensembles flous simultanément. 
                          Par exemple, une température de 18°C pourrait être considérée comme "basse" à 60% 
                          et "moyenne" à 40%.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="architecture" className="p-4 bg-white rounded-xl shadow-md">
              <Card>
                <CardHeader>
                  <CardTitle>Architecture du système</CardTitle>
                  <CardDescription>Structure technique de la plateforme AgriFuzzy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">Architecture globale</h3>
                      <p className="text-gray-700 mb-4">
                        AgriFuzzy utilise une architecture moderne client-serveur avec une séparation claire 
                        entre le frontend et le backend:
                      </p>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                        <h4 className="font-medium text-gray-800 mb-2">Frontend (Client)</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                          <li>React.js pour l'interface utilisateur</li>
                          <li>TailwindCSS pour le styling</li>
                          <li>React Query pour la gestion des données</li>
                          <li>React Router pour la navigation</li>
                          <li>Recharts pour les visualisations</li>
                        </ul>
                        
                        <h4 className="font-medium text-gray-800 mb-2">Backend (Serveur)</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                          <li>Flask (Python) pour l'API REST</li>
                          <li>Simpful pour l'implémentation ANFIS</li>
                          <li>PostgreSQL pour le stockage des données</li>
                          <li>Express.js comme proxy API</li>
                        </ul>
                        
                        <h4 className="font-medium text-gray-800 mb-2">Déploiement</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Hébergement sur Replit</li>
                          <li>CI/CD via GitHub Actions</li>
                          <li>Monitoring avec Prometheus</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">Schéma d'architecture</h3>
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md mb-6">
                        <img 
                          src="https://miro.medium.com/v2/resize:fit:1400/1*73J3FlU9iJqNfkltT5C-yQ.png" 
                          alt="Architecture système d'AgriFuzzy" 
                          className="w-full h-auto"
                        />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4">Flux de données</h3>
                      <p className="text-gray-700 mb-4">
                        Le processus de prédiction suit ces étapes:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>L'utilisateur saisit les données environnementales dans l'interface</li>
                        <li>Le frontend envoie une requête API au backend</li>
                        <li>Le modèle ANFIS traite les données et génère des prédictions</li>
                        <li>Les résultats sont renvoyés au frontend et affichés à l'utilisateur</li>
                        <li>Les prédictions sont enregistrées dans la base de données pour analyse</li>
                      </ol>
                      
                      <div className="mt-6 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                        <h4 className="text-lg font-medium text-indigo-800 mb-2">Sécurité et performance</h4>
                        <ul className="list-disc list-inside text-indigo-700 space-y-1">
                          <li>Authentification pour l'accès à l'API et au dashboard</li>
                          <li>Validation des entrées utilisateur</li>
                          <li>Cache des résultats fréquents pour améliorer les performances</li>
                          <li>Mise à l'échelle automatique en fonction de la charge</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources" className="p-4 bg-white rounded-xl shadow-md">
              <Card>
                <CardHeader>
                  <CardTitle>Ressources</CardTitle>
                  <CardDescription>Liens et références pour approfondir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Ressources publiques</h3>
                      
                      <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="font-medium text-gray-800 mb-2">Code source</h4>
                          <p className="text-gray-700 mb-2">
                            Le code source d'AgriFuzzy est disponible sur GitHub sous licence MIT.
                          </p>
                          <a 
                            href="https://github.com/agrifuzzy/anfis-model" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#4CAF50] hover:text-green-700"
                          >
                            <i className="fab fa-github mr-2"></i> 
                            github.com/agrifuzzy/anfis-model
                          </a>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="font-medium text-gray-800 mb-2">API publique</h4>
                          <p className="text-gray-700 mb-2">
                            Une version de l'API est disponible pour les développeurs souhaitant intégrer 
                            nos prédictions dans leurs applications.
                          </p>
                          <a 
                            href="https://api.agrifuzzy.com/docs" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#4CAF50] hover:text-green-700"
                          >
                            <i className="fas fa-book-open mr-2"></i> 
                            Documentation de l'API
                          </a>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                          <h4 className="font-medium text-gray-800 mb-2">Jeu de données</h4>
                          <p className="text-gray-700 mb-2">
                            Un échantillon anonymisé des données d'entraînement est disponible pour la recherche.
                          </p>
                          <a 
                            href="https://kaggle.com/datasets/agrifuzzy/morocco-agri-data" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#4CAF50] hover:text-green-700"
                          >
                            <i className="fas fa-database mr-2"></i> 
                            Télécharger le dataset (Kaggle)
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Publications et références</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-800">Articles scientifiques</h4>
                          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                            <li>
                              Hassan, M. et al. (2023). "ANFIS-based precision irrigation for semi-arid regions". 
                              <span className="italic">Journal of Agricultural Engineering</span>, 52(3), 125-139.
                            </li>
                            <li>
                              Zahra, F. & Taleb, A. (2022). "Fuzzy logic applications in crop selection for North African climate".
                              <span className="italic">Computers and Electronics in Agriculture</span>, 198, 106345.
                            </li>
                            <li>
                              Mansouri, H. et al. (2021). "Comparative study of machine learning methods for agricultural predictions".
                              <span className="italic">Ecological Informatics</span>, 65, 101400.
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4">Outils et bibliothèques</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <a 
                          href="https://github.com/aresio/simpful" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                        >
                          <img 
                            src="https://raw.githubusercontent.com/aresio/simpful/master/docs/pics/logo.png" 
                            alt="Simpful" 
                            className="w-16 h-16 object-contain mb-2"
                          />
                          <span className="text-gray-800 font-medium">Simpful</span>
                          <span className="text-sm text-gray-600">Fuzzy Logic Python Library</span>
                        </a>
                        
                        <a 
                          href="https://matplotlib.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                        >
                          <img 
                            src="https://matplotlib.org/stable/_static/logo_light.svg" 
                            alt="Matplotlib" 
                            className="w-16 h-16 object-contain mb-2"
                          />
                          <span className="text-gray-800 font-medium">Matplotlib</span>
                          <span className="text-sm text-gray-600">Data Visualization</span>
                        </a>
                        
                        <a 
                          href="https://reactjs.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                        >
                          <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" 
                            alt="React" 
                            className="w-16 h-16 object-contain mb-2"
                          />
                          <span className="text-gray-800 font-medium">React</span>
                          <span className="text-sm text-gray-600">Frontend Framework</span>
                        </a>
                        
                        <a 
                          href="https://flask.palletsprojects.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition"
                        >
                          <img 
                            src="https://flask.palletsprojects.com/en/2.3.x/_images/flask-logo.png" 
                            alt="Flask" 
                            className="w-16 h-16 object-contain mb-2"
                          />
                          <span className="text-gray-800 font-medium">Flask</span>
                          <span className="text-sm text-gray-600">Python API Framework</span>
                        </a>
                      </div>
                    </div>
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

export default Documentation;