import React from "react";
import Header from "./Header";
import { socials } from "../socialData";
import FloatingIcons from "./FloatingIcons";
import { Player } from "@lottiefiles/react-lottie-player";
import codingAnimation from "../assets/icons/codingAnimation.json";

const Hero = () => {
  return (
    <div className="hero">
      <Header />

      <div className="header-container">
        <h1 className="font-Gilmer-Outline">
          <span className="span-1">Hello!</span>{" "}
          <span className="span-2">I'm</span>{" "}
          <span className="span-3">Olia</span>
        </h1>
        <h2 className="font-Gilmer-Bold">
          <span className="span-4">I</span>{" "}
          <span className="span-5">develop</span>{" "}
          <span className="span-6">Creative</span>{" "}
          <span className="span-7">&</span>{" "}
          <span className="span-8">Interactive</span>{" "}
          <span className="span-9">webapps</span>{" "}
          <span className="span-10">🚀</span>
        </h2>
      </div>

      <div className="flex space-between content-container">
        <p className="font-Gilmer-Light">
          As a Full-Stack developer, my expertise lies in creating seamless and
          intuitive user experiences. I specialize in using cutting-edge
          technologies to produce high-quality web applications. Specifically, I
          have vast knowledge of ReactJS, Vue & NodeJS, which allows me to build
          complex and dynamic applications with ease.
        </p>

        <div className="flex align-center justify-center img-container">
          <Player
            autoplay
            loop
            src={codingAnimation}
            // style={{ height: "210px", width: "210px" }}
            className="lottie-animation"
          />
        </div>
      </div>

      <div className="flex space-between align-center socials-container">
        {socials.map((social) => {
          return (
            <FloatingIcons
              key={social.name}
              name={social.name}
              imgUrl={`images/${social.name}.svg`}
              link={social.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
