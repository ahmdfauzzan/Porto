import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
