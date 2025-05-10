import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F5F5DC] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536444380742-f5bdd411fb8a?q=80&w=2208&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-20 pb-32">
          <div className="max-w-lg md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white leading-tight">
              <span className="text-[#81C784]">AI-Powered</span> Agriculture for Precision Farming
            </h1>
            <p className="mt-5 text-xl text-white">
              Predict the best irrigation techniques, crop selection, and resource management using our advanced fuzzy logic system.
            </p>
            <div className="mt-8 flex gap-x-4">
              <Link 
                href="/predict"
                className="bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md text-lg transition shadow-lg"
              >
                Try Prediction Now
              </Link>
              <Link 
                href="/about"
                className="bg-white text-[#4CAF50] border border-[#4CAF50] font-medium py-3 px-6 rounded-md text-lg transition hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
