import React from "react";
import skill1 from "../../skills/html.png";
import skill2 from "../../skills/css.png";
import skill3 from "../../skills/js.png";
import skill4 from "../../skills/sass.png";
import skill5 from "../../skills/jquery.png";
import skill6 from "../../skills/pugjs.png";
import skill7 from "../../skills/nextjs.png";
import skill8 from "../../skills/redux.png";
import skill9 from "../../skills/github.png";
import skill10 from "../../skills/gulp.png";
import skill11 from "../../skills/react.png";
import skill12 from "../../skills/typescript.png";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <h3>SKILLS</h3>
      </div>
      <div className="bg-slider">
        <div className="slider">
          <img src={skill1} alt="html" />
          <img src={skill2} alt="css" />
          <img src={skill3} alt="js" />
          <img src={skill4} alt="sass" />
          <img src={skill5} alt="jquery" />
          <img src={skill6} alt="pugjs" />
          <img src={skill7} alt="nextjs" />
          <img src={skill8} alt="redux" />
          <img src={skill9} alt="github" />
          <img src={skill10} alt="gulp" />
          <img src={skill11} alt="react" />
          <img src={skill12} alt="typescript" />
        </div>
        <div className="slider">
          <img src={skill1} alt="html" />
          <img src={skill2} alt="css" />
          <img src={skill3} alt="js" />
          <img src={skill4} alt="sass" />
          <img src={skill5} alt="jquery" />
          <img src={skill6} alt="pugjs" />
          <img src={skill7} alt="nextjs" />
          <img src={skill8} alt="redux" />
          <img src={skill9} alt="github" />
          <img src={skill10} alt="gulp" />
          <img src={skill11} alt="react" />
          <img src={skill12} alt="typescript" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
