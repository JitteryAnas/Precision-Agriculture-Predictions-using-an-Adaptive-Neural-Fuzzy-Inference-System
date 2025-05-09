const AboutContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-montserrat font-bold text-gray-900">
              About AgriFuzzy
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              AgriFuzzy was developed to address the unique challenges of agriculture in semi-arid regions, where water conservation and optimal resource allocation are critical.
            </p>
            
            <p className="mt-4 text-gray-600">
              Our team combines expertise in artificial intelligence, agricultural science, and sustainable farming practices to create a solution that empowers farmers with data-driven decisions.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-montserrat font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To transform traditional farming through accessible AI technology that increases productivity, sustainability, and resilience to climate change.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <i className="fas fa-flask text-[#4CAF50] text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Research-Backed</h4>
                  <p className="text-sm text-gray-500">Based on peer-reviewed studies</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <i className="fas fa-tint text-[#4CAF50] text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Water-Saving</h4>
                  <p className="text-sm text-gray-500">Average 25% water reduction</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <i className="fas fa-leaf text-[#4CAF50] text-xl"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Sustainable</h4>
                  <p className="text-sm text-gray-500">Reduces environmental impact</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Agricultural research and soil analysis" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
