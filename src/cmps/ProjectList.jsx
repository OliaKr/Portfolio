import React from "react";
import { Image } from "./Image";

const ProjectList = () => {
  const projects = [
    {
      title: "Brainwave",
      imgUrl: "/images/screen2.JPG",
      description:
        "An interactive landing page that highlights the features and benefits of the Brainwave AI chatbot app",
      gitLink: "https://github.com/OliaKr/Brainwave",
      website: "https://main.d3f7nseedr4ova.amplifyapp.com/",
    },
    {
      title: "Marina-Therapist",
      imgUrl: "/images/screen5.JPG",
      description:
        'A buisness website developed for the professional therapist "Marina-Massage-Therapist"',
      gitLink: "https://github.com/Marina-Massage-Therapy/",
      website: "https://main.d2tvvv5hcr4651.amplifyapp.com/",
    },
  ];

  return (
    <ul className="clean-list projects-list">
      {projects.map((project, idx) => {
        return (
          <li
            className={`flex ${(idx + 1) % 2 === 0 && "reverse"} project`}
            key={idx}
          >
            <a
              target="_blank"
              href={project.website}
              className="proj-img-container"
            >
              <Image src={project.imgUrl} />
            </a>

            <div className="info-container">
              <a
                target="_blank"
                href={project.website}
                className="font-Gilmer-Bold title"
              >
                {project.title}
              </a>
              <p className="font-Gilmer-Light description">
                {project.description}
              </p>
              <div className="flex align-center github-container">
                <a
                  className="github"
                  target="_blank"
                  href={project.gitLink}
                >
                  <Image src="/images/github-light.svg" />
                </a>

                <a
                  className="arrow"
                  target="_blank"
                  href={project.gitLink}
                >
                  <Image src="/images/arrow-right.svg" />
                </a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
