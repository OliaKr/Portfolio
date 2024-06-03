import { useEffect, useRef, useState } from "react";

export function Image({ src, classes }) {
  const imageRef = useRef(null);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    let observer;

    const observerTimeout = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsRender(true);
          }
        },
        {
          rootMargin: "600px",
        }
      );
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
    }, 200);

    return () => {
      if (observer && imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      clearTimeout(observerTimeout);
    };
  }, [src]);

  if (!isRender) {
    return (
      <span
        className={`image-comp ${classes}`}
        ref={imageRef}
      ></span>
    );
  }

  return (
    <img
      className={`image-comp ${classes}`}
      ref={imageRef}
      src={src}
      alt="Lazy loaded content"
    />
  );
}
