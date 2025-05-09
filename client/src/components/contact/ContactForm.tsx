import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    farmType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, farmType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        farmType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="md:grid md:grid-cols-2">
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4CAF50] focus:ring-[#4CAF50] py-3 px-4 border"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4CAF50] focus:ring-[#4CAF50] py-3 px-4 border"
              />
            </div>
            
            <div>
              <label htmlFor="farm-type" className="block text-sm font-medium text-gray-700">Farm Type</label>
              <Select onValueChange={handleSelectChange} value={formData.farmType}>
                <SelectTrigger className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4CAF50] focus:ring-[#4CAF50] py-3 px-4 border">
                  <SelectValue placeholder="Select farm type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cereal">Cereal crops</SelectItem>
                  <SelectItem value="vegetable">Vegetable farming</SelectItem>
                  <SelectItem value="fruit">Fruit orchards</SelectItem>
                  <SelectItem value="olive">Olive groves</SelectItem>
                  <SelectItem value="mixed">Mixed farming</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4CAF50] focus:ring-[#4CAF50] py-3 px-4 border"
              />
            </div>
            
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4CAF50] hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition shadow-md"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="p-6 md:p-8 bg-[#4CAF50] text-white flex flex-col">
          <h3 className="text-xl font-montserrat font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <i className="fas fa-map-marker-alt mt-1"></i>
              </div>
              <div className="ml-3">
                <p>Agricultural Innovation Center</p>
                <p>123 Green Boulevard</p>
                <p>Rabat, Morocco</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <i className="fas fa-envelope mt-1"></i>
              </div>
              <div className="ml-3">
                <p>info@agrifuzzy.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <i className="fas fa-phone mt-1"></i>
              </div>
              <div className="ml-3">
                <p>+212 555-1234</p>
              </div>
            </div>
          </div>
          
          <div className="mt-auto">
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
