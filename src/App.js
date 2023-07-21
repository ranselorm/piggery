import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
// import Workouts from "./components/Workouts";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
    once: true,
  });
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer /> */}
    </div>
  );
};

export default App;
