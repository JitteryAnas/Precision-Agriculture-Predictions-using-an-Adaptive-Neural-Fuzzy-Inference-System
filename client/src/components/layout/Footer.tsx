import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <i className="fas fa-leaf text-[#4CAF50] text-2xl mr-2"></i>
              <span className="text-white text-2xl font-montserrat font-bold">AgriFuzzy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Intelligent agriculture solutions powered by fuzzy logic and neural networks.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} AgriFuzzy. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/predict" className="text-gray-400 hover:text-white transition">Prediction Tool</Link></li>
              <li><Link href="/documentation" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link href="/admin" className="text-gray-400 hover:text-white transition">Admin</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">API Access</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Research Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
