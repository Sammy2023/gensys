import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import Header from "./Header.jsx";
import Popup from "./Popup.jsx";
import About from "./About.jsx";

export default function Home(props) {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 2000);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Popup trigger={timedPopup}>
        {" "}
        Click on the '{<i class="fa-solid fa-book-open"></i>}' icon to get
        started!
      </Popup>
      <Header />
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <div className={styles.homegtextBox}>
            <h2>Why learn BlockChain?</h2>
            <p>
              In this age, digital technologies only seem to be growing faster
              and faster. One of these emerging technologies is “blockchain”.
            </p>
          </div>
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.graphic}
            src="https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/tezos-iA577utr5N4-unsplash.jpg?v=1651515242776"
            alt="blockchain sea"
          />
        </div>
        <div className={styles.gridItem}>
          <img
            className={styles.graphic}
            src="https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/tezos-Yu-HIuvap1s-unsplash.jpg?v=1651515047848"
            alt="img"
          />
        </div>
        <div className={styles.gridItem}>
          <div className={styles.homegtextBox}>
            <h2> Potential of BlockChain?</h2>
            <p>
              With its immense potential in finance, everyday life, businesses,
              concerts, art, and more, there are endless applications and
              opportunities to take advantage of.
            </p>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
  /* 
    Thoughts:
      Potentially create reusable "Graphic.jsx" component for each of the home graphics?
        e.g. "Learn by building blocks yourself!" + graphic, inside one Graphic component
      Individual graphic ids may not be needed, but they're there for now jic
      Site obv looks a bit tacky rn, but we'll flesh it out over the next week and a half :)
    ~Kyle
  */
}
