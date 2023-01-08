import BoxesSection from "./components/Sections/BoxesSection";
import EnterpriseSection from "./components/Sections/EnterpriseSection";
import HeroSection from "./components/Sections/HeroSection";
import InfoSection from './components/Sections/InfoSection';
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BoxesSection />
      <EnterpriseSection />
      <InfoSection />
      <Footer />
    </>
  )
}

export default App;
