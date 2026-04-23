import React, { useState } from 'react';
import './App.css'; // Make sure you also update the CSS file below
const containerStyle = {
  background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Aapke questions ka array
  const questions = [
    {
      questionText: 'HTML ka main purpose kya hai?',
      answerOptions: [
        { answerText: 'Database management', isCorrect: false },
        { answerText: 'Website ka structure banana', isCorrect: true },
        { answerText: 'Website styling', isCorrect: false },
        { answerText: 'Backend logic', isCorrect: false },
      ],
    },
    {
      questionText: 'CSS ka full form kya hai?',
      answerOptions: [
        { answerText: 'Computer Style Sheets', isCorrect: false },
        { answerText: 'Cascading Style Sheets', isCorrect: true },
        { answerText: 'Creative Style System', isCorrect: false },
        { answerText: 'Colorful Style Sheets', isCorrect: false },
      ],
    },
    // Aur questions yahan add karein...
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple verification for testing (Replace with your own logic if needed)
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    } else {
      alert("Please enter both Username and Password.");
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true); // Yahan quiz khatam, result dikhao
    }
  };

  return (
    <div style={containerStyle}>
      {!isLoggedIn ? (
        /* --- 1. GLASSMORPHISM LOGIN PAGE --- */
        <div className='login-container'>
          <form className='login-form' onSubmit={handleLogin}>
            <h1>Login</h1>
            
            <div className='input-group'>
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
              <span className='icon'>&#128100;</span> {/* Person icon */}
            </div>

            <div className='input-group'>
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <span className='icon'>&#128274;</span> {/* Lock icon */}
            </div>

            <div className='options'>
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className='login-btn'>Login</button>
            
            <p className='register-text'>Don't have an account? <a href="#">Register</a></p>
          </form>
        </div>
      ) : showResult ? (
        /* --- 2. RESULT PAGE --- */
        <div className='glass-panel'>
          <h2>Quiz Completed!</h2>
          <p className='final-score'>Final Score: {score} / {questions.length}</p>
          <button onClick={() => window.location.reload()} className='restart-btn'>Restart Quiz</button>
        </div>
      ) : (
        /* --- 3. QUIZ PAGE --- */
        <div className='glass-panel'>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button 
                key={index} 
                className='answer-btn' 
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
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