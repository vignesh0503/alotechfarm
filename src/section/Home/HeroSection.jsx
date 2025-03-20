import React from "react";
import homeStyle from "./home.module.css";
import waveImg from "../../assets/Vector.png";

const HeroSection = () => {
  return (
    <section className={homeStyle.bg_img} id="Home">
      <div className={homeStyle.HeroContent}>
        <h1>Welcome to the Future of Technology</h1>
        <p>
          Experience innovation like never before with our cutting-edge
          solutions.
        </p>
        <div className={homeStyle.getstartedbtn}>Get Started</div>
      </div>
      <img src={waveImg} alt="Wave" className={homeStyle.waveImage} />
    </section>
  );
};

export default HeroSection;
