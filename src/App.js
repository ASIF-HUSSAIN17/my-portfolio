import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // 👈 Import Footer

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/* Responsive Footer */}
    </div>
  );
}

export default App;
