import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true); // Yahan se result screen trigger hogi
    }
  };

  return (
    <div className="app">
      {showResult ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="quiz-section">
          {/* Aapka Quiz Code */}
        </div>
      )}
    </div>
  );
}

export default App;