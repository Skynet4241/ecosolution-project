import Footer from "../components/Layouts/Footer/Footer";
import Header from "../components/Layouts/Header/Header";
import AboutSection from "../components/Sections/AboutSection/AboutSection";
import HeroSection from "../components/Sections/MainSection/MainSection";

const Home = () => {
  return (
    <div style={{ background: "#F3F5FA" }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
