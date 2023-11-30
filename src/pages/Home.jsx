import Footer from "../components/Layouts/Footer/Footer";
import Header from "../components/Layouts/Header/Header";
import AboutSection from "../components/Sections/AboutSection";
import CaseSection from "../components/Sections/CaseSection/CaseSection";
import ContactUsSection from "../components/Sections/ContactUsSection";
import CustomersSection from "../components/Sections/CustomersSection/CustomersSection";
import FaqSection from "../components/Sections/FaqSection/FaqSection";
import HeroSection from "../components/Sections/MainSection";
import ServiceSection from "../components/Sections/ServiceSection";
import { MainLayout } from "./Home.styled";

const Home = () => {
  return (
    <MainLayout>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <CaseSection />
      <FaqSection />
      <CustomersSection />
      <ContactUsSection />
      <Footer />
    </MainLayout>
  );
};

export default Home;
