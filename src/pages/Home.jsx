import Footer from "../components/Layouts/Footer/Footer";
import Header from "../components/Layouts/Header/Header";
import AboutSection from "../components/Sections/AboutSection";
import HeroSection from "../components/Sections/MainSection";
import ServiceSection from "../components/Sections/ServiceSection";

const Home = () => {
  return (
    <div style={{ background: "#F3F5FA" }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default Home;
