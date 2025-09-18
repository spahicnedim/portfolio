import Hero from "@/sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";
import Navbar from "@/components/Navbar";
import LogoSection from "@/sections/LogoSection";
import FeatureCards from "@/sections/FeatureCards";
import ExperienceSection from "@/sections/ExperienceSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureCards />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
