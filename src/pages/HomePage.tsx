import Domain from "../components/Domain";
import Founders from "../components/Founders";
import GettingSite from "../components/GettingSite";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Works from "../components/Works";
import Footer from "../components/Footer";
import { logo } from "../assets";
import FAQs from "../components/Faqs";

const HomePage = () => {
  return (
    <>
      <Navbar
        logo={logo}
        bgColor="bg-black"
        textColor="text-white"
        borderColor=""
      />
      <Hero />
      <Works />
      <Services />
      <Domain />
      <Reviews />
      <TechStack />
      <Founders />
      <FAQs />
      <GettingSite />
      <Footer />
    </>
  );
};
export default HomePage;
