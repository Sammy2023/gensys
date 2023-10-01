import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.container}>
      <h1 id={styles.title}>GENISYS</h1>
      <h3 id={styles.subtitle}>Blockchain, Simplified</h3>
    </div>
  );
}
