const FeatureSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900">
            Smart Agriculture for Smart Farmers
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered system uses local data and fuzzy logic to provide precise recommendations for your agricultural operations.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-[#F5F5DC] rounded-lg p-6 shadow-md">
            <div className="w-12 h-12 rounded-md bg-[#4CAF50] flex items-center justify-center mb-4">
              <i className="fas fa-tint text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-gray-900">Optimal Irrigation</h3>
            <p className="mt-2 text-gray-600">
              Get precise water recommendations based on environmental conditions to save water and improve crop yield.
            </p>
          </div>
          
          <div className="bg-[#F5F5DC] rounded-lg p-6 shadow-md">
            <div className="w-12 h-12 rounded-md bg-[#4CAF50] flex items-center justify-center mb-4">
              <i className="fas fa-seedling text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-gray-900">Crop Selection</h3>
            <p className="mt-2 text-gray-600">
              Identify the most suitable crops for your specific soil and climate conditions to maximize productivity.
            </p>
          </div>
          
          <div className="bg-[#F5F5DC] rounded-lg p-6 shadow-md">
            <div className="w-12 h-12 rounded-md bg-[#4CAF50] flex items-center justify-center mb-4">
              <i className="fas fa-flask text-white text-xl"></i>
            </div>
            <h3 className="text-xl font-montserrat font-semibold text-gray-900">Fertilizer Optimization</h3>
            <p className="mt-2 text-gray-600">
              Optimize fertilizer usage with AI-driven recommendations that consider soil composition and plant needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
