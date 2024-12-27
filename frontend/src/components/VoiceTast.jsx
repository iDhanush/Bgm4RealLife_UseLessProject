import React, { useState, useEffect, useRef } from "react";
import BTN from "../assets/btn.png";
import STOP from "../assets/Stoprecording.svg";
import { motion } from "framer-motion";
import PreLoader from "./PreLoader";

const MalayalamSpeechToText = () => {
  const [recognition, setRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [voice, setVoice] = useState("");
  const audioRef = useRef(null); // Reference for the audio element
  const [loader, setLoader] = useState(false);

  // Call for API
  const fetchVoice = async (text) => {
    if (!text || text === "Listening...") return; // Prevent API call if text is empty or still listening

    console.log("Calling API with text:", text);
    setLoader(true);
    try {
      const response = await fetch("https://useless.zdisk.xyz/get_emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spoken_text: text, lang: "mal" }),
      });

      const data = await response.json();
      console.log("API Response:", data);
      setVoice(data.bgm);
    } catch (err) {
      console.error("API Error:", err);
      setError(`API Error: ${err.message}`);
    }
    setLoader(false);
  };

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.lang = "ml-IN";
      recognitionInstance.interimResults = false;
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onstart = () => {
        console.log("Speech recognition started.");
        setIsListening(true);
        setResult("Listening...");
      };

      recognitionInstance.onspeechend = () => {
        console.log("Speech has stopped.");
        recognitionInstance.stop();
        setIsListening(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error("Error occurred in recognition:", event.error);
        setError(`Error: ${event.error}`);
        setIsListening(false);
      };

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Result received:", transcript);
        setResult(transcript);
        // Call API with the transcript directly instead of using state
        if (transcript) {
          fetchVoice(transcript);
        }
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  useEffect(() => {
    // Auto-play audio when a new `voice` URL is set
    if (voice && audioRef.current) {
      audioRef.current.load(); // Reload the audio element with the new source
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [voice]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleAudioEnd = () => {
    console.log("Audio ended, restarting listening...");
    startListening(); // Restart speech recognition after audio ends
  };

  return (
    <div>
      {loader && <PreLoader />}
      <p>{result || "Click the button and start speaking in Malayalam"}</p>
      {isListening ? (
        <motion.img
          initial={{ scale: 0, rotate: "20deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
          src={STOP}
          alt=""
          className="btn"
          onClick={stopListening}
        />
      ) : (
        <motion.img
          initial={{ scale: 0, rotate: "20deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          transition={{ duration: 0.8, type: "spring", delay: 0.8 }}
          src={BTN}
          alt=""
          className="btn"
          onClick={startListening}
          disabled={isListening}
        />
      )}

      {voice && (
        <audio ref={audioRef} controls onEnded={handleAudioEnd}>
          <source src={voice} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default MalayalamSpeechToText;
