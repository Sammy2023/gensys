import React from "react";
import styles from "../styles/LessonCard.module.css";

export default function LessonCard(props) {
  const {lessons, currentLesson} = props
  const totalQuestions = 3;
  
  // const dummy = lessons.filter((lesson) => lesson.title == props.currentLesson.title);
  // console.log(dummy[0].quiz);
  return(
    <div>
      <div>
        <h3>{currentLesson.title}</h3> 
      </div>
      <div>
        Questions
      </div>
      <div>
        Current progress: {currentLesson.progress} / {totalQuestions}
      </div>
    </div>
  )
}