import AboutContent from "@/components/about/AboutContent";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About AgriFuzzy - Our Mission & Technology</title>
        <meta name="description" content="Learn about AgriFuzzy's mission to transform traditional farming through accessible AI technology that increases productivity and sustainability." />
      </Helmet>
      <AboutContent />
    </>
  );
};

export default About;
