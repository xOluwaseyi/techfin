import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import MiniNav from "./MiniNav";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <MainPage />
      <MiniNav />
    </div>
  );
};

export default Hero;
