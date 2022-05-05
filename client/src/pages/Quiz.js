import React, { useState, useEffect } from "react";
// import { useMutation } from "@apollo/client";
import { Link, Redirect, Route } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { RANDOM_PRODUCT } from "../utils/queries";
import Jumbotron from '../components/Jumbotron';
// import Auth from "../utils/auth";
// import { Data, Redirect } from './server/schemas/resolvers';
function Quiz() {
  const questions = [
    {
      questionText:
        "What is your ideal climate?",
      answerOptions: [
        { answerText: "Tropical"},
        { answerText: "Four seasons"},
        { answerText: "70°F year round"},
        { answerText: "Snow"},
      ],
    },
    {
      questionText: "What type of enviornment do you most want to live in?",
      answerOptions: [
        { answerText: "City"},
        { answerText: "Beach"},
        { answerText: "Mountains"},
        { answerText: "Island"},
      ],
    },
    {
      questionText: "What are your language abilities?",
      answerOptions: [
        { answerText: "Speak more than 1 langugae" },
        { answerText: "Only speak English"},
        { answerText: "Learning new langauges" },
      ],
    },
    {
        questionText: "What is your favorite dish?",
        answerOptions: [
          { answerText: "Pizza" },
          { answerText: "Sushi"},
          { answerText: "Pasta" },
          { answerText: "Salad" },
        ],
      },
      {
        questionText: "Which of these would you most likely spend your weekend doing?",
        answerOptions: [
          { answerText: "Coffee shops" },
          { answerText: "Spa"},
          { answerText: "going to a bar?"},
          { answerText: "Movies"},
        ],
      },
      {
        questionText: "Which of th following are you most passionate about?",
        answerOptions: [
          { answerText: "Culture" },
          { answerText: "Tradition"},
          { answerText: "Adventure" },
          { answerText: "Art" },
        ],
      },
      {
        questionText: "What's the perfect way to spend a day?",
        answerOptions: [
          { answerText: "Site seeing"},
          { answerText: "Kayaking"},
          { answerText: "Visiting a Winery" },
          { answerText: "Shopping" },
        ],
      },
      {
        questionText: "Why do you like to travel?",
        answerOptions: [
          { answerText: "Escape responsibilities" },
          { answerText: "See nature's beauties"},
          { answerText: "Create memories with family/friends" },
          { answerText: "Learn new cultures" },
        ],
      },
    {
      questionText: "Is having acess to high speed internet important to you?",
      answerOptions: [
        { answerText: "Yes"},
        { answerText: "No"},
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };
  // function resultLink() {
  //   const { data } = (RANDOM_PRODUCT);
  //   let randomProduct;
  //   if ( data ) {
  //     randomProduct = data.randomProduct._id;
  //   }
  // }
  useEffect(() => {
  if (setShowResult) {
    setTimeout(() =>
     3000);
  }})
  return (
    <div className="app">
      {showResult ? (
         <Jumbotron>
           <div className="score-section">
          <h2>Thank you for completing the Questionaire.</h2>
          <h2>You will be routed to a destination shortly.</h2>
          <h2>Safe Travels!</h2>
          <Redirect to="/products/627335d1d9bd1d6a9bef9557" />
        </div>
        </Jumbotron>
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