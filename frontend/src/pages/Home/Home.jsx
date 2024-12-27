import React, { useState } from "react";
import PreLoader from "../../components/PreLoader";
import Nav from "../../components/Nav/Nav";
import MalayalamSpeechToText from "../../components/VoiceTast";

import HERO from "../../assets/Retro.png";
import SPEAKER from "../../assets/speaker.png";
import BTN from "../../assets/btn.png";
import { motion } from "framer-motion";

const Home = () => {
  // const [preloader, setPreLoader] = useState(true);
  // setTimeout(() => {
  //   setPreLoader(false);
  // }, 3000);
  // console.log(preloader);
  return (
    <div className="home">
      <Nav />

      <motion.img
        initial={{ scale: 0, rotate: "20deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        transition={{ duration: 0.8, type: "spring" }}
        className="hero-txt"
        src={HERO}
        alt=""
      />
      <div className="voice-txt">
        <p className="voice-txt-p">
          <MalayalamSpeechToText />
        </p>
      </div>
      <motion.img
        initial={{ scale: 0, rotate: "20deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
        src={SPEAKER}
        className="speaker"
        alt=""
      />
    </div>
  );
};

export default Home;
