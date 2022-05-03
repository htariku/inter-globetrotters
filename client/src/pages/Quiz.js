import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations";
// import Auth from "../utils/auth";


function Quiz() {
  const questions = [
    {
      questionText:
        "Do you like hot or cold?",
      answerOptions: [
        { answerText: "Hot"},
        { answerText: "Cold"},
      ],
    },
    {
      questionText: "What is your biggest pet peeve?",
      answerOptions: [
        { answerText: "Interrupting"},
        { answerText: "Loud Chewing"},
        { answerText: "Slow Internet"},
        { answerText: "Being late"},
      ],
    },
    {
      questionText: "Your weekend consists of...",
      answerOptions: [
        { answerText: "Sleeping all day " },
        { answerText: "Playing call of duty"},
        { answerText: "Partyyyyy" },
        { answerText: "Outside adventures"},
      ],
    },
    {
      questionText: "Which role excites you the most?",
      answerOptions: [
        { answerText: "Marine Biologist"},
        { answerText: "Santa Clause"},
        { answerText: "Sergeant Major of the Army" },
        { answerText: "President"},
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
