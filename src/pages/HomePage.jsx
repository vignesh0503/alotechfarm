import React, { Fragment } from "react";
import HeroSection from "../section/Home/HeroSection";
import AboutUsSection from "../section/Home/AboutUsSection";
import WeProvideSection from "../section/Home/WeProvideSection";
import Portfolio from "../section/Home/Portfolio";
import OurTeamSection from "../section/Home/OurTeamSection";
import ContactUsSection from "../section/Home/ContactUsSection";
import FAQSection from "../section/Home/FAQSection";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutUsSection />
      {/* <WeProvideSection /> */}
      <Portfolio />
      <OurTeamSection />
      <ContactUsSection />
      <FAQSection />
    </Fragment>
  );
};

export default HomePage;
