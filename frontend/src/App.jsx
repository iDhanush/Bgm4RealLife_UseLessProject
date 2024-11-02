import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MalayalamSpeechToText from "./components/VoiceTast";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<MalayalamSpeechToText />} />
    </Routes>
  );
};

export default App;
