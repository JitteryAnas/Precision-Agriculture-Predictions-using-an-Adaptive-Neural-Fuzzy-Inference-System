const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900">
            How Our ANFIS Technology Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our Adaptive Neuro-Fuzzy Inference System combines neural networks with fuzzy logic for precise agricultural predictions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <img 
                src="https://img.freepik.com/free-photo/smart-farming-with-agriculture-iot_53876-124634.jpg?t=st=1746835481~exp=1746839081~hmac=47a998222e48c38c76c857d721e35f37b452007327555a3f5e44e7494111d5c0&w=1380" 
                alt="Agricultural technology in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-montserrat font-semibold text-gray-900">Data Collection</h3>
                <p className="mt-2 text-gray-600">
                  Environmental sensors collect real-time data on temperature, rainfall, humidity, and soil conditions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-montserrat font-semibold text-gray-900">Fuzzy Rules Processing</h3>
                <p className="mt-2 text-gray-600">
                  ANFIS applies fuzzy logic rules to transform precise input values into linguistic variables for reasoning.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-montserrat font-semibold text-gray-900">Neural Network Analysis</h3>
                <p className="mt-2 text-gray-600">
                  The neural network component learns from historical data to continuously improve prediction accuracy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-[#4CAF50] text-white">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-montserrat font-semibold text-gray-900">Precision Recommendations</h3>
                <p className="mt-2 text-gray-600">
                  The system generates specific actionable recommendations for optimal agricultural management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
