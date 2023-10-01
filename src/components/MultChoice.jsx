import React from "react";
import styles from "../styles/MultChoice.module.css";

export default function MultChoice(props) {
  const {
    score,
    showScore,
    quizLength,
    currentQuestion,
    currentLesson,
    handleAnswerButton,
    handleClick,
    handleEndQuiz,
  } = props;

  return (
    <div>
      {showScore ? (
        <div class="container">
          <div className={styles.score_section}>
            <p>You have scored {score} of {quizLength} </p>
            <button className={styles.exitbtn} onClick={handleEndQuiz}>
              Back to Lesson
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.quiz_container}>
          <div className={styles.quiz_section}>
            <div className={styles.question_text}>
              {currentLesson[0].quiz[currentQuestion].question}
            </div>
          </div>
          <div className={styles.answer_section}>
            {currentLesson[0].quiz[currentQuestion].answerOptions.map(
              (answer) => (
                <button
                  onClick={() => handleAnswerButton(answer.isCorrect)}
                  className={styles.answerItem}
                >
                  {" "}
                  {answer.answerText}{" "}
                </button>
              )
            )}
          </div>
          <div>
            {/*<button className={styles.exitbtn} onClick={handleBack}>Back</button>*/}
            <button className={styles.exitbtn} onClick={handleClick}>
              Back to Lesson
            </button>
            {/*<button className={styles.exitbtn} onClick={handleForward}>Next</button>*/}
          </div>
        </div>
      )}
    </div>
  );
}
