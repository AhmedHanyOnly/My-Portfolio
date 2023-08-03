import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
const NavBar = () => {
  const [navbar, setNavebar] = useState(false);
  const [slider, setSlider] = useState(false);

  //navbar effect
  const navAction = () => {
    window.scrollY > 0 ? setNavebar(true) : setNavebar(false);
  };
  window.addEventListener("scroll", navAction);
  //open sidebar
  function openSlider() {
    setSlider((slider) => !slider);
    console.log(slider);
  }
  function closeslide() {
    setSlider(false);
    console.log("yes");
  }
  //nav click active
  // const [one, setOne] = useState(false);
  // const [two, setTwo] = useState(false);
  // const [tree, setTree] = useState(false);
  // const [four, setFour] = useState(false);

  // useEffect(() => {
  //   setOne(true);
  // }, []);

  return (
    <div className={navbar ? "bg-nav active-bg" : "bg-nav"}>
      <Container>
        <div className="con-nav">
          <div className="logo">
            <h3>ahmed</h3>
          </div>
          <nav className={slider ? " open-slider" : null}>
            <ul>
              <span>ahmed</span>
              <CustomList to="/">
                <Link to="/" onClick={closeslide}>
                  Home
                </Link>
              </CustomList>
              <CustomList to="/about">
                <Link to="/about" onClick={closeslide}>
                  About
                </Link>
              </CustomList>
              <CustomList to="/projects">
                <Link to="/projects" onClick={closeslide}>
                  Projects
                </Link>
              </CustomList>
              <CustomList to="/contact">
                <Link to="/contact" onClick={closeslide}>
                  Contact
                </Link>
              </CustomList>
            </ul>
          </nav>
          <div className="check-btn" onClick={openSlider}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Container>
    </div>
  );
};
const CustomList = ({ to, children }) => {
  const resolvePath = useResolvedPath(to);
  const IsActive = useMatch(resolvePath.pathname);

  return <li className={IsActive ? "active" : ""}>{children}</li>;
};
export default NavBar;
