import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
  );
}
