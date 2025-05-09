const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900">
            What Farmers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Farmers across Morocco have improved their yields and reduced water usage with our system.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-[#4CAF50]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "The irrigation recommendations have helped me reduce water usage by 30% while maintaining crop health. This technology is a game-changer for dry regions."
            </p>
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                <p>Hassan Mansouri</p>
                <p className="text-sm text-gray-500">Wheat Farmer, Fez Region</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-[#4CAF50]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "I was skeptical about AI in farming, but the crop recommendations were spot on. I've diversified my production based on their advice and increased profits."
            </p>
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                <p>Fatima Zahra</p>
                <p className="text-sm text-gray-500">Orchard Owner, Marrakech</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="text-[#4CAF50]">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "The AgriFuzzy system predicted weather-related challenges and helped me plan accordingly. We saved our entire olive harvest despite a difficult season."
            </p>
            <div className="flex items-center">
              <div className="font-medium text-gray-900">
                <p>Ahmed Boutaleb</p>
                <p className="text-sm text-gray-500">Olive Grower, Tangier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
