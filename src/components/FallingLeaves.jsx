/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function FallingLeaves({ numLeaves = 10, speed = 6000 }) {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const loadImageSize = () => {
      setImageSize({
        width: document.getElementById("leavesImage").clientWidth,
        height: document.getElementById("leavesImage").clientHeight,
      });
    };

    window.addEventListener("resize", updateScreenSize);
    loadImageSize();

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const getRandomPosition = () => ({
    x: Math.random() * (screenSize.width - imageSize.width),
    y:
      -imageSize.height -
      Math.random() * (screenSize.height + imageSize.height),
  });

  const animateLeaves = () => {
    const leaves = Array.from({ length: numLeaves }).map(() => {
      const startPos = getRandomPosition();
      return useSpring({
        from: { translateX: startPos.x, translateY: startPos.y, opacity: 0 },
        to: async (next) => {
          await next({
            translateY: screenSize.height - imageSize.height,
            opacity: 0.4,
          });
          await next({ opacity: 0 });
        },
        config: { duration: speed, delay: Math.random() * 2000 },
      });
    });

    return leaves;
  };

  const leaves = animateLeaves();

  return (
    <div style={{ position: "absolute", top: 0, left: 0, zIndex: 44 }}>
      {leaves.map((leafAnimation, index) => (
        <animated.div key={index} style={leafAnimation}>
          <img
            id="leavesImage"
            src="/pngwing.com.png"
            alt="Falling Leaves"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </animated.div>
      ))}
    </div>
  );
}

export default FallingLeaves;
