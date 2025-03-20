import React from "react";
import footerStyle from "./footer.module.css";
import {
  FaFacebookF,
  FaPhone,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import footerlogo from "../../assets/ALO.png";

const WebFooter = () => {
  return (
    <div className={footerStyle.footer_section} id="Footer">
      <div className={footerStyle.footer_container}>
        {/* First Row - Contact */}
        <div className={footerStyle.footer_card1}>
          <h2>Contact Us</h2>
          <div className={footerStyle.footer_details}>
            <div className={footerStyle.footer_contact}>
              <a
                className={footerStyle.Footer_Address}
                href="tel:+91 99947 25508"
              >
                <span>
                  <FaPhone />
                </span>{" "}
                +91 99947 25508
              </a>
              <a
                className={footerStyle.Footer_Address}
                href="mailto:info@techfarm.com"
              >
                <span>
                  <IoMdMail />
                </span>{" "}
                info@techfarm.com
              </a>
            </div>
            <a
              className={footerStyle.Footer_Address}
              href="https://maps.app.goo.gl/mpB3aJLL3fvmCPBH7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLocationDot />
              </span>
              ALO Infotech, Main Road, Christopher Colony Extension,
              Parvathipuram, Nagercoil, Tamil Nadu 629003
            </a>
          </div>
        </div>

        {/* Second Row - About & Support */}
        <div className={footerStyle.footer_card_group}>
          <div className={footerStyle.footer_card}>
            <h2>About Us</h2>
            <ul className={footerStyle.footer_links}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>

          <div className={footerStyle.footer_card}>
            <h2>Support</h2>
            <ul className={footerStyle.footer_links}>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">We Provide</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Third Row - Social */}
        <div className={footerStyle.footer_social}>
          <h2>Social</h2>
          <ul className={footerStyle.footer_links}>
            <li>
              <a href="#">
                <FaInstagram /> <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin /> <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF /> <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={footerStyle.footer_bottom}>
        <div className={footerStyle.footer_bottom_content}>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>© 2025 ALO Info-Tech. All Rights Reserved</p>
          <p>
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
        <div className={footerStyle.footer_logo}>
          <img src={footerlogo} alt="footer logo" />
        </div>
      </div>
    </div>
  );
};

export default WebFooter;
