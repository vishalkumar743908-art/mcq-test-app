import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login track karne ke liye
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: 'Python extension?',
      answerOptions: [
        { answerText: '.js', isCorrect: false },
        { answerText: '.py', isCorrect: true },
      ],
    },
    // Aur questions yahan add kar sakte hain
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Login button dabane par quiz start hoga
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {!isLoggedIn ? (
        /* 1. LOGIN PAGE */
        <div className='login-section'>
          <h2>Login to Start Quiz</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required style={{display: 'block', margin: '10px auto'}} />
            <input type="password" placeholder="Password" required style={{display: 'block', margin: '10px auto'}} />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : showScore ? (
        /* 2. RESULT PAGE */
        <div className='score-section'>
          <h2>Final Result</h2>
          <p>Score: {score} / {questions.length}</p>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        /* 3. QUIZ PAGE */
        <div className='quiz-section'>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;