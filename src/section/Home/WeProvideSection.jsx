import React from "react";
import homeStyle from "./home.module.css";

const WeProvideSection = () => {
  const services = [
    {
      title: "Project Materials",
      description:
        "Essential components, tools, and resources required for project execution.",
    },
    {
      title: "Basic Funds",
      description:
        "Financial support for purchasing necessary materials, software, and services.",
    },
    {
      title: "Technical Assistance",
      description:
        "Guidance and troubleshooting for any technical challenges during the project.",
    },
  ];

  return (
    <section className={homeStyle.weProvide_Section}>
      <div className={homeStyle.WeProvideContainer}>
        <h2 className={homeStyle.heading}>We Provide</h2>
        <p className={homeStyle.subText}>
          Explore the range of services offered by our tech farm.
        </p>

        <div className={homeStyle.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={homeStyle.serviceCard}>
              <h3 className={homeStyle.serviceTitle}>{service.title}</h3>
              <p className={homeStyle.serviceDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeProvideSection;
