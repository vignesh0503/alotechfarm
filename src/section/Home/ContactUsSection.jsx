import React, { useState } from "react";
import homeStyle from "./home.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsSection = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [firstNameMessage, setfirstNameMessage] = useState("");
  const [lastNameMessage, setlastNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneNumberMessage, setphoneNumberMessage] = useState("");
  const [collegeMessage, setCollegeMessage] = useState("");
  const [projectMessage, setProjectMessage] = useState("");
  const [projectDescriptionMessage, setProjectDescriptionMessage] =
    useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);

  const validate = () => {
    const firstnamepattern =
      /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    const lastnamepattern = /^[a-z]+([A-Z]|[a-z])*$/;
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberpattern =
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    let valid = true;
    if (firstName.trim() === "") {
      setfirstNameMessage("Enter Your First Name");
      valid = false;
    } else if (!firstnamepattern.test(firstName)) {
      setfirstNameMessage("Name is invalid");
      valid = false;
    } else {
      setfirstNameMessage("");
    }
    if (lastName.trim() === "") {
      setlastNameMessage("Enter Your Last Name");
      valid = false;
    } else if (!lastnamepattern.test(lastName)) {
      setlastNameMessage("Name is invalid");
      valid = false;
    } else {
      setlastNameMessage("");
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
    if (phoneNumber.trim() === "") {
      setphoneNumberMessage("Enter Your Number");
      valid = false;
    } else if (!numberpattern.test(phoneNumber)) {
      setphoneNumberMessage("Invalid Number");
      valid = false;
    } else {
      setphoneNumberMessage("");
    }

    if (projectDescription.trim() === "") {
      setProjectDescriptionMessage("Please provide a project description.");
      valid = false;
    }
    if (valid) {
      setSuccess("");
      setTimeout(() => setSuccess(""), 3000);
      setfirstName("");
      setlastName("");
      setCollegeName("");
      setProjectName("");
      setEmail("");
      setphoneNumber("");
      setProjectDescription("");
      setError("");
    } else {
      setSuccess("");
      setTimeout(() => setError(""), 3000);
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
        lastName,
        email,
        phoneNumber,
        collegeName,
        projectName,
        projectDescription,
        enrollType: "Registered",
      };
      // console.log(payload, "payload");
      const response = await axios.post(
        "https://aloinfotech.in/api/enroll/send",
        payload
      );
      // console.log(response, "jnk");
      // console.log(payload, "jnk");

      if (response?.data?.status === true) {
        // setSuccess(response?.data?.message || "Register successful!");
        toast.success(response?.data?.message || "Register successful!");
        setfirstName("");
        setlastName("");
        setCollegeName("");
        setProjectName("");
        setEmail("");
        setphoneNumber("");
        setProjectDescription("");
      } else {
        // setError(response.data.message || "Register failed!");
        toast.error(response.data.message || "Register failed!");
      }
    } catch (e) {
      // setError(e.response?.data?.message || "Something went wrong");
      toast.error(e.response?.data?.message || "Something went wrong");
    } finally {
      setLoad(false);
    }
  };

  const handleFirstname = (e) => {
    setfirstName(e.target.value);
    setfirstNameMessage("");
    setSuccess("");
    setError("");
  };
  const handleLastname = (e) => {
    setlastName(e.target.value);
    setlastNameMessage("");
    setSuccess("");
    setError("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailMessage("");
    setSuccess("");
    setError("");
  };
  const handlePhone = (e) => {
    setphoneNumber(e.target.value);
    setphoneNumberMessage("");
    setSuccess("");
    setError("");
  };
  const handleCollegename = (e) => {
    setCollegeName(e.target.value);
    setCollegeMessage("");
    setSuccess("");
    setError("");
  };
  const handleProjectname = (e) => {
    setProjectName(e.target.value);
    setProjectMessage("");
    setSuccess("");
    setError("");
  };

  const handleProjectDescription = (e) => {
    setProjectDescription(e.target.value);
    setProjectDescriptionMessage("");
    setSuccess("");
    setError("");
  };
  return (
    <section className={homeStyle.Contact_section} id="contact">
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
                  value={firstName}
                  onChange={handleFirstname}
                  type="text"
                  placeholder="Enter Your First Name"
                />
                {firstNameMessage && (
                  <p className={homeStyle.formData_Error}>{firstNameMessage}</p>
                )}
              </div>
              <div>
                <label>Last Name</label>
                <input
                  value={lastName}
                  onChange={handleLastname}
                  type="text"
                  placeholder="Enter Your Last Name"
                />
                {lastNameMessage && (
                  <p className={homeStyle.formData_Error}>{lastNameMessage}</p>
                )}
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhone}
                  placeholder="Enter Your Number"
                />
                {phoneNumberMessage && (
                  <p className={homeStyle.formData_Error}>
                    {phoneNumberMessage}
                  </p>
                )}
              </div>
              <div>
                <label>Mail</label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter Your Email"
                />
                {emailMessage && (
                  <p className={homeStyle.formData_Error}>{emailMessage}</p>
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
                  <p className={homeStyle.formData_Error}>{collegeMessage}</p>
                )}
              </div>
              <div>
                <label>Project Name</label>
                <input
                  value={projectName}
                  onChange={handleProjectname}
                  type="text"
                  placeholder="Title of Your Project"
                />
                {projectMessage && (
                  <p className={homeStyle.formData_Error}>{projectMessage}</p>
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
                  <p className={homeStyle.formData_Error}>
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
                {load ? "Submitting..." : "Submit"}
              </button>
            </div>
            {success && (
              <p className={homeStyle.Contact_succesMessage}>{success}</p>
            )}
            {error && <p className={homeStyle.Contact_errorMessage}>{error}</p>}
          </form>
        </div>
      </div>

      {/* Toast Container */}

      <ToastContainer />
    </section>
  );
};

export default ContactUsSection;
