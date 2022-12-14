import AboutSection from "./sections/AboutSection";
import Footer from "./sections/Footer";
import HeroV2 from "./sections/HeroV2";
import MarketingSection from "./sections/MarketingSection";
import SuccessStories from "./sections/SuccessStories";
import SupportSection from "./sections/SupportServices";

function App() {
  return (
    <>
      <HeroV2 />
      {/* <HeroSection /> */}
      <AboutSection invert/>
      <MarketingSection />
      <SupportSection invert/>
      <SuccessStories />
      <Footer />
    </>
  );
}

export default App;
