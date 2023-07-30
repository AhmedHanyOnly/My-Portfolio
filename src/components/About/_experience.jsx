import React, { useState } from "react";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";
const Experience = () => {
  const [start, setStart] = useState(false);

  const startAnimation = () => {
    window.scrollY > 1500 ? setStart(true) : setStart(false);
  };

  window.addEventListener("scroll", startAnimation);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start  "],
  });
  // const scaleX = useSpring(scrollYProgress);
  return (
    <div ref={ref} className="experience">
      <div className="title">
        <h3>experience</h3>
      </div>
      <div className="container">
        <div className="content">
          <div className={start ? "col start-col" : "col"}></div>
          <div className={start ? "box left-box start-box" : "box left-box"}>
            <div className="text-box right-container">
              <h3>Const Tech</h3>
              <p>2023 - Present</p>
              <p>
                Building Responsive websites with the latest
                libraries and frameworks work with designers and back-end
                developers to ensure compatibility with the overall user
                experience
              </p>
              <div className="left-arrow"></div>
            </div>
          </div>
          <div className={start ? "box right-box start-box" : "box right-box"}>
            <div className="text-box left-container">
              <h3>freelancer </h3>
              <p>2022-2023</p>
              <p>
                As i am front-end freelancer, your primary focus is on creating
                the user-facing portion of websites and applications, You'll
                also need to have an eye for design and be able to work closely
                with clients to understand their specific needs and preferences.
              </p>
              <div className="right-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
