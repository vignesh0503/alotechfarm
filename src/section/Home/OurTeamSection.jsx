import React from "react";
import Teamimg1 from "../../assets/ourteamimg1.jpeg";
import Teamimg2 from "../../assets/ourteamimg2.jpeg";
import Teamimg3 from "../../assets/ourteamimg3.png";
import homeStyle from "./home.module.css";

const OurTeamSection = () => {
  const teams = [
    {
      id: 1,
      name: "John Doe",
      role: "AI Chatbot Developer",
      description:
        "Developed an advanced AI chatbot that revolutionized customer service interactions, increasing satisfaction by 30%.",
      image: Teamimg1,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Product Designer",
      description:
        "Specialized in creating intuitive and user-friendly product designs that elevate customer experience.",
      image: Teamimg2,
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "Software Engineer",
      description:
        "Built scalable and high-performance web applications, enhancing system efficiency.",
      image: Teamimg3,
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
              <img
                src={team.image}
                alt={team.name}
                className={homeStyle.Ourteam_image}
              />
              <h3 className={homeStyle.Ourteam_name}>{team.name}</h3>
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
