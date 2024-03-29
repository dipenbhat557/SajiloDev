import Domain from "../components/Domain";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Works from "../components/Works";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Domain />
      <Reviews />
    </>
  );
};
export default HomePage;
