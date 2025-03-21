import React, { useState } from "react";
import homeStyle from "./home.module.css";

const ContactUsSection = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneno] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [firstnameMessage, setFirstnameMessage] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phonenoMessage, setPhonenoMessage] = useState("");
  const [collegeMessage, setCollegeMessage] = useState("");
  const [projectMessage, setProjectMessage] = useState("");
  const [projectDescriptionMessage, setProjectDescriptionMessage] =
    useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    const namepattern =
      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberpattern =
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    let valid = true;
    if (firstname.trim() === "") {
      setFirstnameMessage("Enter Your First Name");
      valid = false;
    } else if (!namepattern.test(firstname)) {
      setFirstnameMessage("Name is invalid");
      valid = false;
    } else {
      setFirstnameMessage("");
    }
    if (lastname.trim() === "") {
      setLastNameMessage("Enter Your Last Name");
      valid = false;
    } else if (!namepattern.test(lastname)) {
      setLastNameMessage("Name is invalid");
      valid = false;
    } else {
      setLastNameMessage("");
    }
    if (collegeName.trim() === "") {
      setCollegeMessage("Enter Your College Name Correctly");
      valid = false;
    } else {
      setCollegeMessage("");
    }
    if (projectName.trim() === "") {
      setProjectMessage("Enter Your Project Name Correctly");
      valid = false;
    } else {
      setProjectMessage("");
    }

    if (email.trim() === "") {
      setEmailMessage("Enter an Email");
      valid = false;
    } else if (!emailpattern.test(email)) {
      setEmailMessage("Invalid email");
      valid = false;
    } else {
      setEmailMessage("");
    }
    if (phoneNo.trim() === "") {
      setPhonenoMessage("Enter Your Number");
      valid = false;
    } else if (!numberpattern.test(phoneNo)) {
      setPhonenoMessage("Invalid Number");
      valid = false;
    } else {
      setPhonenoMessage("");
    }

    if (projectDescription.trim() === "") {
      setProjectDescriptionMessage("Please provide a project description.");
      valid = false;
    }
    if (valid) {
      setSuccess("Form submitted successfully");
      setTimeout(() => setSuccess(""), 3000);
      setFirstname("");
      setLastname("");
      setCollegeName("");
      setProjectName("");
      setEmail("");
      setPhoneno("");
      setProjectDescription("");
    } else {
      setSuccess("");
    }
  };

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    setFirstnameMessage("");
    setSuccess("");
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
    setLastNameMessage("");
    setSuccess("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailMessage("");
    setSuccess("");
  };
  const handlePhone = (e) => {
    setPhoneno(e.target.value);
    setPhonenoMessage("");
    setSuccess("");
  };
  const handleCollegename = (e) => {
    setCollegeName(e.target.value);
    setCollegeMessage("");
    setSuccess("");
  };
  const handleProjectname = (e) => {
    setProjectName(e.target.value);
    setProjectMessage("");
    setSuccess("");
  };

  const handleProjectDescription = (e) => {
    setProjectDescription(e.target.value);
    setProjectDescriptionMessage("");
    setSuccess("");
  };
  return (
    <section className={homeStyle.Contact_section}>
      <div className={homeStyle.ContactForm_container}>
        <div>
          <h2>Let's get you started</h2>
          <p>Enter the details to get going</p>
        </div>
        <div>
          <form className={homeStyle.form}>
            <div className={homeStyle.inputGroup}>
              <div>
                <label>First Name</label>
                <input
                  value={firstname}
                  onChange={handleFirstname}
                  type="text"
                  placeholder="Enter Your First Name"
                />
                {firstnameMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {firstnameMessage}
                  </p>
                )}
              </div>
              <div>
                <label>Last Name</label>
                <input
                  value={lastname}
                  onChange={handleLastname}
                  type="text"
                  placeholder="Enter Your Last Name"
                />
                {lastNameMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {lastNameMessage}
                  </p>
                )}
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  value={phoneNo}
                  onChange={handlePhone}
                  placeholder="+91 99999 99999"
                />
                {phonenoMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {phonenoMessage}
                  </p>
                )}
              </div>
              <div>
                <label>Mail</label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="mail@gmail.com"
                />
                {emailMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {emailMessage}
                  </p>
                )}
              </div>
              <div>
                <label>College Name</label>
                <input
                  value={collegeName}
                  onChange={handleCollegename}
                  type="text"
                  placeholder="Name for your College"
                />
                {collegeMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {collegeMessage}
                  </p>
                )}
              </div>
              <div>
                <label>Project Name</label>
                <input
                  value={projectName}
                  onChange={handleProjectname}
                  type="text"
                  placeholder="Title"
                />
                {projectMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {projectMessage}
                  </p>
                )}
              </div>

              <div className={homeStyle.fullWidth}>
                <label>Project Description</label>
                <textarea
                  value={projectDescription}
                  onChange={handleProjectDescription}
                  placeholder="Enter project details"
                />
                {projectDescriptionMessage && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      textAlign: "left",
                    }}
                  >
                    {projectDescriptionMessage}
                  </p>
                )}
              </div>
            </div>
            <div className={homeStyle.formbtn_container}>
              <button
                type="button"
                className={homeStyle.Formbutton}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            {success && (
              <p
                style={{
                  color: "green",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
