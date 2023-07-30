import React, { useEffect } from "react";
import Landing from "../components/Home/landing";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { delay, easeInOut, motion, AnimatePresence } from "framer-motion";
const Home = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }, []);

  const Animation = {
    hidden: {
      x: "-100vw",
    },
    show: {
      x: "0vw",
      transition: { easeInOut },
      delay: 5,
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  };
  return (

      <motion.div
      >
        <Landing />
      </motion.div>

  );
};

export default Home;
