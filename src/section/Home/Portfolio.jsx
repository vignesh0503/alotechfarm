import React from "react";
import portfolioimg1 from "../../assets/portfolio1.png";
import portfolioimg2 from "../../assets/photo2.png";
import portfolioimg3 from "../../assets/photo3.png";
import homeStyle from "./home.module.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot Development",
      description:
        "That revolutionized customer service interactions, resulting in a 30% increase in customer satisfaction.",
      image: portfolioimg1,
    },
    {
      id: 2,
      title: "Alo Invoice App",
      description:
        "Empowering businesses with seamless invoicing, automated payments, and smart financial management.",
      image: portfolioimg2,
    },
    {
      id: 3,
      title: "T-Shirt E-Commerce Platform",
      description:
        "A fully functional E-commerce platform designed for custom T-shirt printing and sales.",
      image: portfolioimg3,
    },
  ];
  return (
    <section className={homeStyle.portfolio}>
      <div className={homeStyle.container}>
        <h2 className={homeStyle.title}>Tech Farm Portfolio</h2>
        <p className={homeStyle.subtitle}>
          Explore a selection of our successful projects that demonstrate our
          expertise and innovation in the tech industry.
        </p>
        <div className={homeStyle.portfolio_grid}>
          {projects.map((project) => (
            <div key={project.id} className={homeStyle.portfolio_card}>
              <img
                src={project.image}
                alt={project.title}
                className={homeStyle.project_image}
              />
              <h3 className={homeStyle.projectTitle}>{project.title}</h3>
              <p className={homeStyle.projectDescription}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
