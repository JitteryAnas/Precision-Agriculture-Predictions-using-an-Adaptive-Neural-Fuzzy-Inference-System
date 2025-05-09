import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AgriFuzzy - AI-Powered Agriculture for Precision Farming</title>
        <meta name="description" content="AgriFuzzy uses ANFIS fuzzy logic to provide precision agriculture recommendations including irrigation, crop selection, and resource management." />
      </Helmet>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
