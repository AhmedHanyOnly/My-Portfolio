import React, { useEffect } from "react";
import Skills from "../components/About/_skills";
import Article from "../components/About/_article";
import Experience from "../components/About/_experience";
import TranstionPages from "./TranstionPages";
const About = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  },[])
  return (
    <>
    {/* <TranstionPages/> */}
    <Article/>
    <Skills/>
    <Experience/>
    {/* <button onClick={goTop}>goTop</button> */}
    </>
  )
};

export default About;
