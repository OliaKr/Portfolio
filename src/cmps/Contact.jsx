import React from "react";
import { Image } from "./Image";

const Contact = () => {
  const linksInfo = [
    {
      imgUrl: "/images/github-light.svg",
      link: "https://github.com/OliaKr",
    },
    {
      imgUrl: "/images/linkedin-light.svg",
      link: "https://www.linkedin.com/in/olia-krasilnikov/",
    },
    {
      imgUrl: "/images/facebook.svg",
      link: "https://www.facebook.com/profile.php?id=100010372724389",
    },
  ];
  return (
    <div className="flex column space-between contact">
      <div className="info-container">
        <h1 className="font-Gilmer-Heavy">
          Interested?
          <br />
          Let's Get In Touch!
        </h1>

        <p className="font-Gilmer-Light info">
          I'm active on{" "}
          <a
            href="https://www.linkedin.com/in/olia-krasilnikov//"
            target="_blank"
          >
            LinkedIn
          </a>
          , so you can reach me there. I'm also available on{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100010372724389"
            target="_blank"
          >
            Facebook
          </a>{" "}
          and on{" "}
          <a
            href="https://www.instagram.com/olia_kass/"
            target="_blank"
          >
            Instagram
          </a>
          . Contact me !
        </p>

        {/* <a
          className="resume-link"
          href="/files/Eden_Rize-Resume.pdf"
          download="Eden Rize - Resume.pdf"
        >
          <button className="flex align-center resume">
            <Image src="/img/pdf.svg" />
            <p className="font-Gilmer-Bold">Download Resume</p>
          </button>
        </a> */}
      </div>

      <div className="flex align-center space-between links-container">
        {linksInfo.map((link, idx) => {
          return (
            <a
              className="flex align-center justify-center social-link"
              key={idx}
              href={link.link}
              target="_blank"
            >
              <Image src={link.imgUrl} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
