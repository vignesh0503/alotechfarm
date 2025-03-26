import React from "react";
import Teamimg1 from "../../assets/md.jpg";
import Teamimg2 from "../../assets/esai.jpg";
import Teamimg3 from "../../assets/Ahin.jpg";
import homeStyle from "./home.module.css";
import { FaLinkedin } from "react-icons/fa";

const OurTeamSection = () => {
  const teams = [
    {
      id: 1,
      name: "Natarajan B",
      role: "Founder & CEO",
      description:
        "Meet Natarajan, the visionary behind ALO Info-Tech, turned a small team into a thriving family. His innovation and leadership drive our success. Grateful for his guidance in shaping our future",
      image: Teamimg1,
      linkedinUrl: "https://www.linkedin.com/in/natarajan13",
    },
    {
      id: 2,
      name: "Esai Kumar",
      role: "CFO & UI/UX Designer",
      description:
        "Meet Esai Kumar, CFO & UI/UX Designer at ALO Info-Tech. His financial expertise and design skills drive our growth, inspiring innovation and excellence in the ALO family.",
      image: Teamimg2,
      linkedinUrl: "https://www.linkedin.com/in/esai-kumar-38620a25b/",
    },
    {
      id: 3,
      name: "Ahin PM",
      role: "Business Development Manager",
      description:
        "Meet Ahin PM, Business Development Manager at ALO Info-Tech. His strategic vision and leadership drive our growth, fostering innovation and excellence in the ALO family.",
      image: Teamimg3,
      linkedinUrl: "https://www.linkedin.com/in/ahin-pm-a40b44190/",
    },
  ];

  return (
    <section className={homeStyle.Ourteam_section}>
      <div className={homeStyle.Ourteam_container}>
        <h2 className={homeStyle.Ourteam_title}>Meet Our Team</h2>
        <p className={homeStyle.Ourteam_subtitle}>
          Get to know the key team members of our tech firm who bring expertise
          and innovation to every project.
        </p>
        <div className={homeStyle.Ourteam_grid}>
          {teams.map((team) => (
            <div key={team.id} className={homeStyle.Ourteam_card}>
              <div className={homeStyle.Ourteam_image_card}>
                <img
                  src={team.image}
                  alt={team.name}
                  className={homeStyle.Ourteam_image}
                />
              </div>
              <div className={homeStyle.Ourteam_name_card}>
                <h3 className={homeStyle.Ourteam_name}>{team.name}</h3>
                <a href={team.linkedinUrl} target="_blank">
                  <FaLinkedin />
                </a>
              </div>
              <h4 className={homeStyle.Ourteam_role}>{team.role}</h4>
              <p className={homeStyle.Ourteam_description}>
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
