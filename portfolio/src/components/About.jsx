// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      About Page <Link to="/">To Home</Link>
    </div>
  );
};

export default About;
