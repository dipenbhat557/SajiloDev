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

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Domain />
      <Reviews />
      <TechStack />
      <Founders />
      <GettingSite />
      <Footer />
    </>
  );
};
export default HomePage;
