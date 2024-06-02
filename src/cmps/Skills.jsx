import React from "react";
import Carousel from "./Carousel";

const toolsImgs = [
  "/images/js.svg",
  "/images/react.svg",
  "/images/vue.svg",
  "/images/node.svg",
  "/images/tailwind.svg",
  "/images/css.svg",
  "/images/mongo.svg",
  "/images/express.svg",
  "/images/postman.svg",
  "/images/aws.svg",
  "/images/redux.svg",
  "/images/sass.svg",
  "/images/typescript.svg",
  "/images/html.svg",
  "/images/firebase.svg",
  "/images/mui.svg",
];

const Skills = () => {
  return (
    <div className="tools">
      <h1 className="font-Gilmer-Outline">Languages, Frameworks & Tools</h1>
      <Carousel images={toolsImgs} />
    </div>
  );
};

export default Skills;
