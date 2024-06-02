import React, { useEffect, useState } from "react";
import { Image } from "./Image";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [images]);

  const getPrevIdx = (idx) => (idx - 1 + images.length) % images.length;
  const getNextIdx = (idx) => (idx + 1) % images.length;
  const getTwoBeforeIdx = (idx) => (idx - 2 + images.length) % images.length;
  const getTwoAfterIdx = (idx) => (idx + 2) % images.length;

  const renderImages = () => {
    if (!images || images.length === 0) {
      return null; // Return nothing if images is undefined or empty
    }

    const currentIdx = currentImage;
    const prevIdx = getPrevIdx(currentIdx);
    const nextIdx = getNextIdx(currentIdx);
    const twoBeforeIdx = getTwoBeforeIdx(currentIdx);
    const twoAfterIdx = getTwoAfterIdx(currentIdx);

    const imagesToRender = [
      {
        key: twoBeforeIdx,
        src: images[twoBeforeIdx],
        className: "semi-hidden before",
      },
      { key: prevIdx, src: images[prevIdx], className: "prev" },
      { key: currentIdx, src: images[currentIdx], className: "current" },
      { key: nextIdx, src: images[nextIdx], className: "next" },
      {
        key: twoAfterIdx,
        src: images[twoAfterIdx],
        className: "semi-hidden after",
      },
    ];

    return imagesToRender.map(({ key, src, className }) => (
      <Image
        key={key}
        src={src}
        classes={`carousel-img ${className}`}
      />
    ));
  };

  return <div className="carousel">{renderImages()}</div>;
};

export default Carousel;
