import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import bearImage from "../assets/pp.jpeg";

const BearAnimation = () => {
  const imageRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const size = windowWidth < 950 ? "60px" : "275px";

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const imageStyle = {
    width: size,
    height: size,
    opacity: inView ? 1 : 0.5,
    transition: "opacity 0.3s ease",

    transform: inView ? "scale(1)" : "scale(0.95)",
    borderRadius: "30%",
    objectFit: "cover",
  };

  return (
    <div ref={ref}>
      <img ref={imageRef} src={bearImage} alt="Bear" style={imageStyle} />
    </div>
  );
};

export default BearAnimation;
