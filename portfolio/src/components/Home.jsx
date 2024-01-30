// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sloganTitle}>
        <div className={styles.slogan}>
          <p style={{ marginRight: "10px" }}>
            <span className={styles.sloganL}> It </span>{" "}
            <span className={styles.sloganR}> works on my machine :) </span>
          </p>{" "}
        </div>
      </div>
      <p className={styles.projectHeader}> Projects</p>
      <div className={styles.projectsCards}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
      <p className={styles.slogan2}>
        It’s remarkable how a simple solution has a great impact. The hard part
        is discovering the solution.
      </p>
    </div>
  );
};

export default Home;
