import React from "react";
import { Routes, Route } from "react-router-dom";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Home from "./pages/Home";
import Contact from "./components/Contact";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
