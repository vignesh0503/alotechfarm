import React from "react";
import homeStyle from "./home.module.css";
import Aboutusimg from "../../assets/Aboutusimg.png";
import WeProvideSection from "./WeProvideSection";

const AboutUsSection = () => {
  return (
    <section className={homeStyle.about_section} id="Aboutus">
      <div className={homeStyle.About_container}>
        {/* Left Side - Text Content */}
        <div className={homeStyle.about_left_content}>
          <div className={homeStyle.about_content}>
            <h1>About Us</h1>
            <p>
              Alo Tech Farm empowers student innovators by supporting startups
              and IT projects. We bridge the gap between education and industry,
              fostering creativity and real-world problem-solving.
            </p>
            <button className={homeStyle.morebtn}>More</button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className={homeStyle.about_right_content}>
          <div className={homeStyle.abtimg}>
            <img src={Aboutusimg} alt="About Us" />
          </div>
        </div>
      </div>

      {/* We Provide Section */}
      <WeProvideSection />
    </section>
  );
};

export default AboutUsSection;
