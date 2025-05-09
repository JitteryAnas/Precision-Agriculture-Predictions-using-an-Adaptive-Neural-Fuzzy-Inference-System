import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

const faqs: FAQItem[] = [
  {
    question: "D'où viennent les données utilisées par AgriFuzzy ?",
    answer: "Les données utilisées par le système AgriFuzzy proviennent de multiples sources fiables : stations météorologiques locales, données satellites de surveillance des cultures, analyses de sol de parcelles agricoles représentatives, enregistrements historiques d'irrigation et de rendement des cultures, ainsi que des rapports d'experts agronomes. Nous accordons une attention particulière aux données collectées dans les régions agricoles du Maroc pour garantir la pertinence des recommandations pour les agriculteurs locaux.",
    category: "Données"
  },
  {
    question: "Le modèle ANFIS est-il fiable pour l'agriculture ?",
    answer: "Oui, le modèle ANFIS (Adaptive Neuro-Fuzzy Inference System) est particulièrement adapté à l'agriculture car il combine les avantages des réseaux de neurones et de la logique floue. Cette approche hybride permet de gérer efficacement l'incertitude inhérente aux données agricoles tout en apprenant des tendances historiques. Notre système atteint une précision de 85% sur les données de test, ce qui en fait un outil fiable pour les recommandations agricoles. Il est particulièrement efficace pour l'optimisation de l'irrigation en tenant compte des conditions climatiques variables et des caractéristiques du sol.",
    category: "Technique"
  },
  {
    question: "Comment utiliser concrètement les recommandations d'AgriFuzzy ?",
    answer: "Les recommandations d'AgriFuzzy sont conçues pour être pratiques et directement applicables. Pour l'irrigation, nous fournissons une quantité précise (en L/m²/jour) que vous pouvez utiliser pour ajuster vos systèmes d'arrosage. Pour les cultures recommandées, vous pouvez planifier vos prochaines plantations en fonction de ces suggestions. Le calendrier de plantation vous aide à déterminer le moment optimal pour semer, tandis que les recommandations d'amendement du sol peuvent être suivies lors de la préparation de vos parcelles. Pour des résultats optimaux, nous vous conseillons de combiner nos recommandations avec votre connaissance du terrain et de suivre l'évolution de vos cultures.",
    category: "Utilisation"
  },
  {
    question: "Est-ce que je peux ajouter mes propres données au système ?",
    answer: "Actuellement, la version standard d'AgriFuzzy ne permet pas aux utilisateurs d'ajouter directement leurs propres données au système. Cependant, nous travaillons sur une version premium qui offrira cette fonctionnalité pour les agriculteurs souhaitant personnaliser davantage les prédictions. Si vous disposez de données historiques spécifiques à votre exploitation que vous aimeriez intégrer, veuillez nous contacter via notre formulaire de contact. Notre équipe technique évaluera la possibilité d'une intégration personnalisée pour votre cas particulier.",
    category: "Fonctionnalités"
  },
  {
    question: "Pourquoi le pH du sol est-il important pour les recommandations ?",
    answer: "Le pH du sol est un facteur crucial en agriculture car il influence directement la disponibilité des nutriments pour les plantes. Un pH trop acide ou trop alcalin peut rendre certains nutriments essentiels inaccessibles, même s'ils sont présents en quantité suffisante dans le sol. Notre système utilise cette mesure pour recommander non seulement les cultures les mieux adaptées à votre type de sol, mais aussi les amendements nécessaires pour optimiser sa fertilité. Par exemple, un sol acide (pH < 6.5) pourrait bénéficier d'un apport de chaux, tandis qu'un sol alcalin (pH > 7.5) pourrait nécessiter du soufre ou de la matière organique pour améliorer sa structure et sa fertilité.",
    category: "Agronomie"
  },
  {
    question: "Quelle est la différence entre irrigation goutte-à-goutte et aspersion ?",
    answer: "L'irrigation goutte-à-goutte et l'aspersion sont deux méthodes distinctes avec des avantages différents. Le goutte-à-goutte délivre l'eau directement à la base des plantes via des tubes perforés, économisant jusqu'à 60% d'eau par rapport aux méthodes traditionnelles et réduisant les maladies fongiques. L'aspersion, quant à elle, imite la pluie naturelle en pulvérisant l'eau au-dessus des cultures, couvrant de plus grandes surfaces mais avec plus d'évaporation et de risques de maladies foliaires. AgriFuzzy peut vous recommander la méthode la plus adaptée selon vos cultures et conditions environnementales.",
    category: "Irrigation"
  },
  {
    question: "Comment le changement climatique affecte-t-il les recommandations ?",
    answer: "Le changement climatique est intégré dans nos modèles de prédiction. Notre système ANFIS analyse les tendances climatiques récentes pour ajuster ses recommandations en conséquence. Avec l'augmentation des températures et l'irrégularité des précipitations, nous avons adapté nos algorithmes pour privilégier des cultures plus résistantes à la sécheresse et des techniques d'irrigation plus économes en eau dans les régions vulnérables. Nous mettons régulièrement à jour notre base de connaissances avec les dernières données climatiques pour maintenir la pertinence de nos recommandations face à l'évolution du climat.",
    category: "Climat"
  },
  {
    question: "AgriFuzzy est-il adapté aux petites exploitations familiales ?",
    answer: "Absolument ! AgriFuzzy a été conçu en pensant aussi bien aux petites exploitations familiales qu'aux grandes fermes commerciales. L'interface simple permet aux agriculteurs de tous niveaux techniques d'obtenir des recommandations précieuses sans nécessiter de connaissances avancées en informatique ou en agronomie. De plus, les recommandations d'économie d'eau et d'optimisation des ressources sont particulièrement bénéfiques pour les petites exploitations, où chaque ressource compte. Nous proposons également des conseils adaptés aux pratiques agroécologiques souvent privilégiées par les fermes familiales.",
    category: "Utilisation"
  },
  {
    question: "Comment est calculée la confiance des prédictions ?",
    answer: "Le niveau de confiance affiché avec chaque prédiction est calculé à partir de plusieurs facteurs : la quantité et la qualité des données disponibles pour votre région spécifique, la cohérence des prédictions du modèle sur des données similaires, et la variabilité des conditions environnementales récentes. Un pourcentage élevé (>80%) indique que le modèle dispose de données abondantes et cohérentes pour votre cas. Une confiance plus faible suggère que vos conditions sont plus uniques ou que les données historiques sont limitées pour votre contexte spécifique. Dans ce cas, nous vous recommandons de combiner nos suggestions avec votre expertise locale.",
    category: "Technique"
  },
  {
    question: "Peut-on utiliser AgriFuzzy pour l'agriculture biologique ?",
    answer: "Oui, AgriFuzzy est parfaitement compatible avec l'agriculture biologique. Nos recommandations d'amendement du sol privilégient des solutions naturelles comme le compost, les engrais verts et les amendements minéraux autorisés en agriculture biologique. Pour la gestion des cultures, le système favorise la diversification et la rotation, principes fondamentaux de l'agriculture biologique. Les recommandations d'irrigation visent à optimiser l'utilisation de l'eau tout en maintenant la santé du sol, ce qui correspond aux pratiques durables recherchées par les agriculteurs biologiques.",
    category: "Agronomie"
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filtrer les FAQs en fonction de la recherche et de la catégorie sélectionnée
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? faq.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  // Extraire les catégories uniques
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));
  
  return (
    <>
      <Helmet>
        <title>Foire Aux Questions - AgriFuzzy</title>
        <meta name="description" content="Trouvez des réponses à vos questions sur AgriFuzzy, notre système d'IA pour l'agriculture de précision utilisant la logique floue ANFIS." />
      </Helmet>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-montserrat font-bold text-gray-900">
              Foire Aux Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explorez nos réponses aux questions fréquemment posées sur AgriFuzzy et l'agriculture de précision.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <i className="fas fa-search"></i>
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-[#4CAF50] hover:bg-green-600" : ""}
                >
                  Tous
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-[#4CAF50] hover:bg-green-600" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md overflow-hidden">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 font-medium text-gray-900">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="bg-green-100 rounded-full h-6 w-6 flex items-center justify-center">
                          <i className="fas fa-question text-[#4CAF50] text-xs"></i>
                        </div>
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <div className="bg-[#4CAF50] bg-opacity-10 rounded-full h-6 w-6 flex items-center justify-center">
                          <i className="fas fa-lightbulb text-[#4CAF50] text-xs"></i>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700">{faq.answer}</p>
                        <div className="mt-3 flex">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center p-8 bg-white rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-4">
                <i className="fas fa-search text-gray-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-600">
                Essayez d'ajuster votre recherche ou de sélectionner une autre catégorie.
              </p>
            </div>
          )}
          
          <div className="mt-12 p-6 bg-[#4CAF50] bg-opacity-10 rounded-xl text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-700 mb-4">
              N'hésitez pas à nous contacter directement pour toute question spécifique
              concernant l'utilisation d'AgriFuzzy.
            </p>
            <Button variant="default" className="bg-[#4CAF50] hover:bg-green-600">
              <i className="fas fa-envelope mr-2"></i> Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;