import ContactForm from "@/components/contact/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact AgriFuzzy - Get in Touch</title>
        <meta name="description" content="Contact the AgriFuzzy team for questions about implementing our AI-powered agricultural technology on your farm." />
      </Helmet>
      <section className="py-16 bg-[#F5F5DC] bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-montserrat font-bold text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about implementing our technology on your farm? We're here to help.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
