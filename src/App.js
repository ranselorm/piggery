import { Routes, Route } from "react-router-dom";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Consultation from "./pages/Consultation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 100,
    once: true,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
