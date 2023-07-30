import React from "react";
import { motion } from "framer-motion";
const TranstionPages = () => {
  return (
    <>
      <motion.div
        className="transition one"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" ,transition:{
          duration: 0.8,
          ease: "easeInOut"
        }}}
      ></motion.div>
      <motion.div
        className="transition two"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" ,transition:{
          delay:"0.2",
          duration: 0.8,
          ease: "easeInOut",
        }}}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="transition three"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" ,transition:{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut"
        }}}
      ></motion.div>
    </>
  );
};

export default TranstionPages;
