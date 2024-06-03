import React from "react";
import Hero from "../cmps/Hero";
import Projects from "../cmps/Projects";
import Skills from "../cmps/Skills";
import Carousel from "../cmps/Carousel";
import Contact from "../cmps/Contact";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
