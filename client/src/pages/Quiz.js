import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations";
// import Auth from "../utils/auth";


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

  var bgImageArray = ["http://localhost:3000/products/6271bfb83410c541d4ad21de", "http://localhost:3000/products/6271bfb93410c541d4ad21e6", "http://localhost:3000/products/6271bfb93410c541d4ad21e9", "http://localhost:3000/products/6271bfb93410c541d4ad21f0", "http://localhost:3000/products/6271bfb93410c541d4ad21f5", "http://localhost:3000/products/6271bfb93410c541d4ad21fc", "http://localhost:3000/products/6271bfb93410c541d4ad21fe"];

  const random = Math.floor(Math.random() * bgImageArray.length);
  console.log(random, bgImageArray[random]);

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
//   var bgImageArray = [
//     "link1" , "link2" , "link3"
//     ]
    
//     base = "https://lh3.googleusercontent.com/pw/";
//     bgImageArray.forEach(function(img){
//         new Image().src = base + img; 
//     });
    
//     function backgroundSequence() {
//       window.clearTimeout();
//       var k = 0;
//       for (i = 0; i < bgImageArray.length; i++) {
//         setTimeout(function(){ 
//           document.getElementById('animated-bg').style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center";
//         if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (60000 / tempo.value))} else { k++; }      
//         }, (60000 / tempo.value) * i) 
//       }
//     }
    
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