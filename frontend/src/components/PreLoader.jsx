import React from "react";
import LOADER from '../assets/loader.svg';
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <div className="preloader">
      <motion.img 
      initial={{scale:.8}}
      animate={{scale:1}}
      transition={{
        type:'spring',
        duration:1,
        repeat: Infinity
      }}
      src={LOADER} alt=""
      style={{
        width:'260px'
      }}
      />
    </div>
  );
};

export default PreLoader;
