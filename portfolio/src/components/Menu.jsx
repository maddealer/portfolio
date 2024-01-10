// import React from 'react';
import { Link } from "react-router-dom";
import IMAGES from "../images/IMAGES";
import styles from "./Menu.module.css";
import navStyles from "./MenuNav.module.css";
const Menu = () => {
  return (
    <div className={styles.container}>
      <header className={navStyles.header}>
        <Link to="/" className={navStyles.logo}>
          <img
            className={navStyles.imgsize}
            // style={{ width: "100%", height: "auto" }}

            src={IMAGES.image1}
            alt="first image"
            width={80}
            height={80}
          />{" "}
        </Link>{" "}
        <input
          className={navStyles["menu-btn"]}
          type="checkbox"
          id="menu-btn"
        />
        <label className={navStyles["menu-icon"]} htmlFor="menu-btn">
          <span className={navStyles.navicon}></span>
        </label>{" "}
        <ul className={navStyles.menu}>
          <li>
            <Link to="/">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Menu;
