// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import HamburgerMenu from "./Menu";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <HamburgerMenu />
      <div className={styles.container}>
        About Page <Link to="/">To Home</Link>
      </div>
      <Footer />
    </>
  );
};

export default About;
