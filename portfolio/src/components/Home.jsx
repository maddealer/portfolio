// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import HamburgerMenu from "./Menu";
import Footer from "./Footer";
import { FaLink } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <HamburgerMenu />
      <div className={styles.container}>
        <div className={styles.sloganTitle}>
          <div className={styles.slogan}>
            <p style={{ marginRight: "10px" }}>
              <span className={styles.sloganL}> It </span>{" "}
              <span className={styles.sloganR}> works on my machine! </span>
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
        <p className={styles.slogan2} style={{ color: "#253d5a" }}>
          It’s remarkable how a simple solution has a great impact. The hard
          part is discovering the solution.
        </p>
        <div
          className={styles.section}
          style={{
            backgroundColor: "#a7b3a4",
            //  "#73373f",
          }}
        >
          <div className={styles.one}></div>{" "}
          <div
            className={styles.onetext}
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              maxWidth: "400px",
              padding: "0 10px",
            }}
          >
            <h1 style={{ fontSize: "1.7rem" }}>Match Predictor</h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                margin: "10px 0",
              }}
            >
              Web Application / PWA
            </p>
            <p style={{ fontSize: ".875rem" }}>
              The idea behind MatchPredictor.net is to provide a tool that is
              simple and easy to use by providing statistic and historical data
              of football matches played in various leagues for team A vs team
              B. <br /> Match Predictor uses specially developed algorithms and
              mathematical calculations and poisson probabilities. <br />
              Created with Nextjs 13, Redux toolkit, RapidApi, Vercel
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <FaLink size="0.75rem" color="#ffffff" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https:/www.matchpredictor.net"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  marginLeft: "10px",
                }}
              >
                visit www.matchpredictor.net
              </a>
            </p>
          </div>
        </div>
        <div
          className={styles.section}
          style={{
            backgroundColor: "#8f98a6",
          }}
        >
          <div className={styles.two}></div>{" "}
          <div
            className={styles.onetext}
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              maxWidth: "400px",
              padding: "0 10px",
            }}
          >
            <h1 style={{ fontSize: "1.7rem" }}>BlackJack Bot</h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                margin: "10px 0",
              }}
            >
              Web Application / PWA
            </p>
            <p style={{ fontSize: ".875rem" }}>
              The app is designed to facilitate the use of the BlackJack Basic
              Strategy. Basic strategy is based upon a player's point total and
              the dealer's visible card. <br />
              Each BlackJack game has a basic strategy, which prescribes the
              optimal method of playing any hand against any dealer up-card so
              that the long-term house advantage (the expected loss of the
              player) is minimized. <br />
              Created with React, Netlify
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <FaLink size="0.75rem" color="#ffffff" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.blackjackbot.net"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  marginLeft: "10px",
                }}
              >
                visit www.blackjackbot.net
              </a>
            </p>
          </div>
        </div>
        <div
          className={styles.section}
          style={{
            backgroundColor: "#b5a596",
          }}
        >
          {" "}
          <div className={styles.three}></div>{" "}
          <div
            className={styles.onetext}
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
              maxWidth: "400px",
              padding: "0 10px",
            }}
          >
            <h1 style={{ fontSize: "1.7rem" }}>GitHub</h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "300",
                margin: "10px 0",
              }}
            >
              You can check my account
            </p>
            <p style={{ fontSize: ".875rem" }}>
              Мy account was created 8 years ago, when my interest in
              programming started.
              <br /> I have not uploaded everything, but please take a look at
              the projects that I have cited here.
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <FaLink size="0.75rem" color="#ffffff" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/maddealer"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  fontSize: "0.75rem",
                  marginLeft: "10px",
                }}
              >
                visit github.com/maddealer
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
