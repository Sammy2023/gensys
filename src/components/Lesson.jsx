import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "../styles/Lesson.module.css";

export default function Lesson(props) {
  const { lessons, users, currentUserId, onQuizClick} = props;
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const currLesson = lessons.find((lesson) => lesson.id === lessonId);

  function handleClick() {
    navigate("/lessons");
  }
  // Sammy - Implement the quiz button to record the status of the quiz
  function handleQuizClick(){
    onQuizClick(currentUserId, lessonId);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.lessonHeader}>
        <div className={styles.goBackBtn}>
          {" "}
          {/* see note in Lesson.module.css */}
          <button onClick={handleClick}>Back to Lessons</button>
        </div>

        <h1>{currLesson.title}</h1>
      </div>
      <div className={styles.contentGrid}>
        {currLesson.info.map((infoItem) => (
          <div className={styles.useLess}>
            <div className={styles.gridText}>
              <h2>{infoItem.subtitle}</h2>
              {infoItem.text}
            </div>
            <img className={styles.gridPhoto} src={infoItem.photo} />
          </div>
        ))}
      </div>
      <div className={styles.quizBtn}>
        <Link to={lessonId.concat("-quiz")}>
          <button onClick={handleQuizClick}>Go to Quiz</button>
        </Link>
      </div>
    </div>
  );
}
