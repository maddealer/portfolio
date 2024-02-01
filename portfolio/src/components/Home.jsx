// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import HamburgerMenu from "./Menu";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <HamburgerMenu />
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
          <div className={`${styles.card} ${styles.match}`}>
            {" "}
            <div className={styles.ribbon}>Match Predictor</div>
          </div>
          <div className={`${styles.card} ${styles.bjbot}`}>
            <div className={styles.ribbon}>BlackJack Bot</div>
          </div>
          <div className={`${styles.card} ${styles.github}`}>
            <div className={styles.ribbon}>My GitHub</div>
          </div>
        </div>
        <p className={styles.slogan2}>
          It’s remarkable how a simple solution has a great impact. The hard
          part is discovering the solution.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
