import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/Quiz.module.css";
import MultChoice from "./MultChoice.jsx";
import {Draggable, Droppable, DragDropContext} from "react-beautiful-dnd";

function Quiz(props) {
  const { users, currentUserId, lessons, currentUser } = props;
  const { lessonId } = useParams();
  const currentLesson = lessons.filter((lesson) => lesson.id == lessonId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const quizLength = currentLesson[0].quiz.length;

  function handleClick() {
    navigate(-1);
  }
  
  function handleEndQuiz(){
    navigate(-1);
    setScore(0);
  }
  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])
  

  const handleAnswerButton = (isCorrect) => {
    if (isCorrect == true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizLength) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.app}>
      <MultChoice
        score={score}
        showScore={showScore}
        quizLength = {quizLength}
        currentLesson = {currentLesson}
        currentQuestion={currentQuestion}
        handleEndQuiz={handleEndQuiz}
        handleAnswerButton={handleAnswerButton}
        handleClick={handleClick}
        />
       
    </div>
  );
}

export default Quiz;
