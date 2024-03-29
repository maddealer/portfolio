import React, { useState } from "react";
import "./Menu.css"; // You can define your styles in a separate CSS file
import IMAGES from "../images/IMAGES";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/">
          {" "}
          <img src={IMAGES.image1} alt="first image" width={50} height={50} />
        </Link>
      </div>
      <div className="title">Hristomir H Portfolio</div>
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <span style={{ fontSize: "1rem", fontWeight: "bold" }}>X</span>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li>About Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
