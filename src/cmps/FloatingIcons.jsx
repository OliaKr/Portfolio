import React from "react";

const FloatingIcons = ({ name, imgUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="social-link"
      rel="noopener noreferrer"
    >
      <div
        className={`${name} flex justify-center align-center icon-container`}
      >
        <div className="flex justify-center align-center img-container">
          <img
            src={imgUrl}
            alt={`${name} icon`}
          />
        </div>
      </div>
    </a>
  );
};

export default FloatingIcons;
