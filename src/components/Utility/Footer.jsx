import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "../../images/roundtext.png";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
  return (
    <div className="bg-footer">
      {/* <Container>
        <Row className="d-flex flex-column justify-content-center align-items-center" >
          <div className="col-12 col-md-3 d-flex justify-content-center">
            <img src={img1} alt="front-end developer" />
          </div>
          <div className="col-12 col-md-4">
            <div className="social-icon gap-4">
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
          </div>
          <div className="col-12 col-md-4">
          <ul>
              <li className=''>
                <a href="#" >
                  Home
                </a>
              </li>
              <li className=''>
                <a href="#" >About</a>
              </li>
              <li className=''>
                <a href="#" >Experience</a>
              </li>
              <li className=''>
                <a href="#" >Contact</a>
              </li>
            </ul>
          </div>
        </Row>
      </Container> */}
      <div className="text">
        <p>© 2023 All Rights Reserved,Ahmed Hany®</p>
      </div>
    </div>
  );
};

export default Footer;
