import React from 'react'
import { Container, Row } from "react-bootstrap";
import img1 from "../../images/desk 2.png";
//icons
import icon1 from "../../images/camera 2.png";
import icon2 from "../../images/github-3d 2.png";
import icon3 from "../../images/Rectangle.png";
import icon4 from "../../images/react-3d 1.png";
import icon5 from "../../images/twitter-3d 1.png";
import Skills from "../../components/About/_skills";
import Project from "../../components/Projects/_project";
import Card from "../../components/Projects/_card";
// import { AnimatePresence, transform } from "framer-motion";
import { animate, delay, motion } from "framer-motion";
const Article = () => {
  const ContainerVariant = {
    Hover: {
      whileHover: {
        scale: 1.2,
      },
    },
    Anime: {
      scale: [0.1, 0.4, 0.7, 1],
      x: 0,
      y: 0,
      stiffness: 20,
      type: "",
      transition: { ease: "easeInOut" },
    },
  };
  return (
    <div>
      <motion.div className="about">
      <Container>
        <Row className="about-content" >
          <div className="col-12 col-md-6">
            <motion.div className="glass" 
            initial={{x:-2000}}
            animate={{x:0, transition:{
              delay:"1"
            }}}
            >
              <h3>biography</h3>
              <p>
                Hi I'm Ahmed a web developer with a passion for creating
                beautiful, function and user centered digital .
              </p>
              <p>
                I'm always looking to leverage my experience as a Front End
                Developer into a challenging position that will allow me to
                utilize my technical skills and creativity to create innovative
                and responsive websites.
              </p>
              <p>
                I am passionate about delivering high-quality, user-friendly
                designs that exceed client expectations. I am eager to learn and
                grow in a dynamic team environment.
              </p>
            </motion.div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center animate-icon">
            <motion.img
              src={icon1}
              alt="img"
              className="camera icon"
              initial={{ x: -300, y: 200 }}
              variants={ContainerVariant}
              animate="Anime"
              // whileHover="Hover"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            />
            <motion.img
              src={icon2}
              alt="img"
              className="git icon"
              variants={ContainerVariant}
              initial={{ x: 300, y: -200 }}
              animate="Anime"
              // whileHover="Hover"
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              drag
            />
            <motion.img
              src={icon3}
              alt="img"
              className="rectangle icon"
              initial={{ x: 0, y: -200 }}
              animate="Anime"
              variants={ContainerVariant}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              // whileHover="Hover"
            />
            <motion.img
              src={icon4}
              alt="img"
              className="react icon"
              initial={{ x: -300, y: -200 }}
              animate="Anime"
              variants={ContainerVariant}
              whileHover="Hover"
            />
            <motion.img
              src={icon5}
              alt="img"
              className="twitter icon"
              variants={ContainerVariant}
              initial={{ x: 300, y: 200 }}
              animate="Anime"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              // whileHover="Hover"
            />
            <img src={img1} alt="img" className="image-icon" />
            <div className="icons">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </Row>
      </Container>
    </motion.div>
    </div>
  )
}

export default Article
