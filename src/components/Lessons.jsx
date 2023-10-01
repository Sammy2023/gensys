import React from "react";
import styles from "../styles/Lessons.module.css";
import { Link } from "react-router-dom";

export default function Lessons(props) {
  const { users, currentUserId, lessons, currentUser } = props;
  return (
    <div className={styles.lesson_container}>
      <div className={styles.container}>
        <h1 id={styles.title}>LESSONS</h1>
        <h3 id={styles.subtitle}>
          Explore blockchain in ways you feel comfortable
        </h3>
      </div>

      {lessons.map((lesson) => (
        <Link to={`${lesson.id}`}>
          <button className={styles.lessonButton}>
            <h2>{lesson.title}</h2>
            <h6>{lesson.difficulty.toUpperCase()}</h6>
          </button>
        </Link>
      ))}
    </div>
  );
  /*
    Changed the link so that it is nested under ([url]/lessons/), rather than on its own ([url]/)
    ~Kyle
    Thoughts:
      Quiz component should render the appropriate quiz based on the URL parameter created after clicking
      the button.
    ~Kyle
  */
}
