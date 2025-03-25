import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logoWhite.png";
import LogoScrolled from "../../assets/logo.png";
import headerstyle from "./header.module.css";

const WebHeader = () => {
  const [logo, setLogo] = useState(Logo);
  const [textColor, setTextColor] = useState("#fff");
  const [buttonBackground, setButtonBackground] = useState("#fff");
  const [buttonTextColor, setButtonTextColor] = useState("#000");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 550) {
        setLogo(LogoScrolled);
        setTextColor("#000");
        setButtonBackground(
          "linear-gradient(135deg, #4e8397, #9b6da6, #d65db1)"
        );
        setButtonTextColor("#fff");
      } else {
        setLogo(Logo);
        setTextColor("#fff");
        setButtonBackground("#fff");
        setButtonTextColor("#000");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={headerstyle.header}>
      <div className={headerstyle.header_container}>
        <div className={headerstyle.header_logo}>
          <img src={logo} alt="Company Logo" height={100} width={100} />
        </div>

        {/* Mobile Menu Button */}
        <div
          className={headerstyle.menu_icon}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={24} color={textColor} />
          ) : (
            <FaBars size={24} color={textColor} />
          )}
        </div>

        <nav
          className={`${headerstyle.nav_links} ${
            menuOpen ? headerstyle.show_menu : ""
          }`}
        >
          <Link
            to="Home"
            smooth
            style={{ color: textColor }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="Aboutus"
            smooth
            style={{ color: textColor }}
            onClick={() => setMenuOpen(false)}
          >
            About us
          </Link>
          <Link
            to="Footer"
            smooth
            style={{ color: textColor }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className={headerstyle.header_btn}>
          <Link
            to="contact"
            smooth
            style={{ background: buttonBackground, color: buttonTextColor }}
            className={headerstyle.Enrollment_btn}
          >
            Enrollment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default WebHeader;
