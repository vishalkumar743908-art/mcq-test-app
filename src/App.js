import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [step, setStep] = useState('login'); // 'login', 'quiz', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: 'React kisne develop kiya hai?',
      options: ['Google', 'Facebook', 'Amazon', 'Apple'],
      answer: 'Facebook'
    },
    {
      questionText: 'Javascript file ka extension kya hota hai?',
      options: ['.js', '.py', '.java', '.html'],
      answer: '.js'
    },
    {
      questionText: 'HTML ka full form kya hai?',
      options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Text Multi Language', 'None'],
      answer: 'Hyper Text Markup Language'
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setStep('quiz');
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setStep('result');
    }
  };

  return (
    <div className="main-container">
      {/* 1. LOGIN SECTION */}
      {step === 'login' && (
        <div className="login-box">
          <form className="glass-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-group">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="options-row">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="login-btn">Login</button>
            <p>Don't have an account? <a href="#">Register</a></p>
          </form>
        </div>
      )}

      {/* 2. QUIZ SECTION */}
      {step === 'quiz' && (
        <div className="glass-panel">
          <div className="quiz-header">
            <span>Question {currentQuestion + 1} / {questions.length}</span>
          </div>
          <h2 className="question-text">{questions[currentQuestion].questionText}</h2>
          <div className="options-grid">
            {questions[currentQuestion].options.map((opt, i) => (
              <button key={i} className="option-btn" onClick={() => handleAnswer(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. RESULT SECTION */}
      {step === 'result' && (
        <div className="glass-panel result-box">
          <h1 className="success-icon">🎉</h1>
          <h2>Quiz Completed!</h2>
          <p className="score-text">Your Score: <b>{score} / {questions.length}</b></p>
          <button className="restart-btn" onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default App;