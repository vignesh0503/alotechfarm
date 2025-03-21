import React, { Fragment, useState } from "react";
import homeStyle from "./home.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");

  const handleSubmit = () => {
    const namepattern =
      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;
    if (name.trim() === "") {
      setNameError("Enter Your Name");
      valid = false;
    } else if (!namepattern.test(name)) {
      setNameError("Name is invalid");
      valid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Enter an Email");
      valid = false;
    } else if (!emailpattern.test(email)) {
      setEmailError("Invalid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (projectDescription.trim() === "") {
      setDescriptionError("Please provide a project description.");
      valid = false;
    } else {
      setDescriptionError("");
    }

    if (valid) {
      setSucessMessage("Form Sent successfully");
      setTimeout(() => setSucessMessage(""), 3000);
      setName("");
      setEmail("");
      setProjectDescription("");
    } else {
      setSucessMessage("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
    setSucessMessage("");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setSucessMessage("");
  };
  const handleDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
    setDescriptionError("");
    setSucessMessage("");
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
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Enter Your First Name"
                    />
                    {nameError && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "2px",
                          textAlign: "left",
                        }}
                      >
                        {nameError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label>Mail</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Mail"
                    />
                    {emailError && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "2px",
                          textAlign: "left",
                        }}
                      >
                        {emailError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label>Project Description</label>
                    <textarea
                      name="projectDescription"
                      value={projectDescription}
                      onChange={handleDescriptionChange}
                      placeholder="Project Description"
                      className={homeStyle.FAQ_textarea}
                    ></textarea>
                    {descriptionError && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "2px",
                          textAlign: "left",
                        }}
                      >
                        {descriptionError}
                      </p>
                    )}
                  </div>
                </div>

                <div className={homeStyle.FAQbtn_container}>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className={homeStyle.FAQbtn}
                  >
                    Send Request
                  </button>
                </div>
                {sucessMessage && (
                  <p
                    style={{
                      color: "green",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {sucessMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FAQSection;