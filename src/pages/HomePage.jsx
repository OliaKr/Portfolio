import React from "react";
import Hero from "../cmps/Hero";
import Projects from "../cmps/Projects";
import Skills from "../cmps/Skills";
import Carousel from "../cmps/Carousel";

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <Skills />
      <Carousel />
    </div>
  );
};

export default HomePage;
