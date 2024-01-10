// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      Home Page <Link to="/about">To About</Link>
    </div>
  );
};

export default Home;
