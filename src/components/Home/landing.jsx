import React from "react";
import { Container, Row } from "react-bootstrap";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import img1 from "../../images/12.png";

const Landing = () => {
  return (
    <div>
      <section data-aos="fade-up" data-aos-duration="2000">
        <Container className="con-landing">
          <div
            className="social-icon col-2 col-md-1  d-flex flex-column gap-4"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="3000"
          >
            <a
              href="https://github.com/AhmedHanyOnly"
              target="_blank"
              className="github-i"
            >
              <SlSocialGithub />
            </a>
            <a
              href="https://www.instagram.com/a7med_hany___/"
              className="insta-i"
              target="_blank"
            >
              <SlSocialInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-hany-08083a271/"
              target="_blank"
              className="linked-i"
            >
              <SlSocialLinkedin />
            </a>
          </div>
          <div
            className="head-text col-9 col-md-7 "
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            data-aos-delay="2500"
          >
            <p>
              Hey! My Name's <span>Ahmed Hany</span>
            </p>
            <h3>Front End React Developer</h3>
            <p>
              Hi I'm Ahmed A passionate Front-end React Developer , Looking to
              leverage my experience as a Front End Developer into a challenging
              position to create innovative and responsive websites.
            </p>
            <a
              href="https://drive.google.com/file/d/1YnyWWTQDB0hqYLr1ZseG4dGgxcpywMMX/view?usp=sharing"
              
              className="btn btn-outline-info text-light"
            >
              Download CV
            </a>
          </div>
          <div
            className="animate-icon col-2 col-md-3 "
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1800"
          >
            <img src={img1} alt="image" className="image-icon" />
            <div className="icons">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </Container>
        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
      </section>
    </div>
  );
};

export default Landing;
