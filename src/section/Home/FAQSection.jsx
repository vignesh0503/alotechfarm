import React, { Fragment, useState } from "react";
import homeStyle from "./home.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";

const FAQSection = () => {
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [QuestionError, setQuestionError] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);

  const validate = () => {
    const namepattern =
      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;
    if (firstName.trim() === "") {
      setNameError("Enter Your Name");
      valid = false;
    } else if (!namepattern.test(firstName)) {
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

    if (question.trim() === "") {
      setQuestionError("Please Enter Your Question.");
      valid = false;
    } else {
      setQuestionError("");
    }

    if (valid) {
      setSucessMessage("");
      setTimeout(() => setSucessMessage(""), 3000);
      setfirstName("");
      setEmail("");
      setQuestion("");
      setError("");
    } else {
      setSucessMessage("");
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    setLoad(true);
    try {
      const payload = {
        firstName,
        email,
        question,
        enrollType: "request",
      };
      console.log(payload, "payload");
      const response = await axios.post(
        "https://aloinfotech.in/api/enroll/send",
        payload
      );
      console.log(response, "jnk");
      console.log(payload, "jnk");

      if (response?.data?.status === true) {
        setSucessMessage(response?.data?.message || "Request Sent successful!");
        setfirstName("");
        setEmail("");
        setQuestion("");
      } else {
        setError(response.data.message || "Request failed!");
      }
    } catch (e) {
      console.error("Error:", e);
      setError(e.response?.data?.message || "Something went wrong");
    } finally {
      setLoad(false);
    }
  };

  const handleNameChange = (e) => {
    setfirstName(e.target.value);
    setNameError("");
    setSucessMessage("");
    setError("");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setSucessMessage("");
    setError("");
  };
  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    setQuestionError("");
    setSucessMessage("");
    setError("");
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
                      Which is the best application for my needs?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The best application depends on your specific
                      requirements! Our team can guide you to the perfect
                      solution based on your business or project needs.
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
                      How can I request a custom solution?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Simply fill out the form on this page with your details
                      and query, and our team will get back to you with tailored
                      recommendations.
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
                      What services does Alo Tech Farm provide?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We specialize in supporting student startups, project
                      development, and IT innovations. Whether you need
                      mentorship, funding, or technical guidance, we’re here to
                      help!
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
                      How can I collaborate with Alo Tech Farm?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We welcome innovative minds! Reach out via our contact
                      form, and let’s explore potential collaborations and
                      growth opportunities.
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
                      value={firstName}
                      onChange={handleNameChange}
                      placeholder="Enter Your First Name"
                    />
                    {nameError && (
                      <p className={homeStyle.formData_Error}>{nameError}</p>
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
                      <p className={homeStyle.formData_Error}>{emailError}</p>
                    )}
                  </div>
                  <div>
                    <label>Question</label>
                    <textarea
                      name="question"
                      value={question}
                      onChange={handleQuestionChange}
                      placeholder="Ask Your Question"
                      className={homeStyle.FAQ_textarea}
                    ></textarea>
                    {QuestionError && (
                      <p className={homeStyle.formData_Error}>
                        {QuestionError}
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
                    {load ? "Submitting..." : "Send Request"}
                  </button>
                </div>
                {sucessMessage && (
                  <p className={homeStyle.succesMessage}>{sucessMessage}</p>
                )}
                {error && <p className={homeStyle.errorMessage}>{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FAQSection;
