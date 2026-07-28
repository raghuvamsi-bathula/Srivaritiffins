import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutSection from "../components/AboutSection";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ReservationCTA from "../components/ReservationCTA";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import ChefsSpecial from "../components/ChefsSpecial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
      <Categories />
      <WhyChooseUs />
      <AboutSection />
      <Gallery />
      <ChefsSpecial />
      <Testimonials />
      <ReservationCTA />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
};

export default Home;