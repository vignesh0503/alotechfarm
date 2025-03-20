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
              Welcome to Alo Tech Farm! We are dedicated to revolutionizing the
              tech industry with our innovative solutions. Our mission is to
              empower individuals and businesses through cutting-edge
              technology. Our vision is to create a connected world where
              technology enhances every aspect of life. At Alo Tech Farm, we
              value creativity, integrity, and excellence in everything we do.
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
