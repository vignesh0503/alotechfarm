import React, { Fragment, useState } from "react";
import homeStyle from "./home.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    projectDescription: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Fragment>
      <div className={homeStyle.FAQSection}>
        <div className={homeStyle.FAQSection_container}>
          <h2 className={homeStyle.FAQSection_title}>
            Frequently asked Questions
          </h2>
          <p className={homeStyle.FAQSection_subtitle}>
            Get to know the key team members of our tech firm who bring
            expertise and innovation to every project.
          </p>

          <div className={homeStyle.FAQ_content}>
            <div className={homeStyle.faq_left_section}>
              <div className={homeStyle.accordian}>
                <Accordion
                  sx={{
                    borderTopLeftRadius: "0px !important",
                    borderTopRightRadius: "0px !important",
                    marginBottom: "20px !important",
                    border: "1px solid #cecece",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">
                      Which is the best Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    borderTopLeftRadius: "0px !important",
                    borderTopRightRadius: "0px !important",
                    marginBottom: "20px !important",
                    border: "1px solid #cecece",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">
                      Which is the best Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    borderTopLeftRadius: "0px !important",
                    borderTopRightRadius: "0px !important",
                    marginBottom: "20px !important",
                    border: "1px solid #cecece",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">
                      Which is the best Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    borderTopLeftRadius: "0px !important",
                    borderTopRightRadius: "0px !important",
                    marginBottom: "20px !important",
                    border: "1px solid #cecece",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">
                      Which is the best Application
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className={homeStyle.faq_right_section}>
              <form className={homeStyle.FAQ_form} onSubmit={handleSubmit}>
                <h2 className={homeStyle.FAQform_title}>Make your Question</h2>
                <div className={homeStyle.FAQ_inputGroup}>
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter Your First Name"
                    />
                  </div>

                  <div>
                    <label>Mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Mail"
                    />
                  </div>
                  <div>
                    <label>Project Description</label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      placeholder="Project Description"
                      className={homeStyle.FAQ_textarea}
                    ></textarea>
                  </div>
                </div>

                <div className={homeStyle.FAQbtn_container}>
                  <button type="submit" className={homeStyle.FAQbtn}>
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FAQSection;
