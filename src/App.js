import React, { useState } from 'react';

function App() {
  // 1. States setup
  const [step, setStep] = useState('login'); // 'login', 'quiz', ya 'result'
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      questionText: 'React kisne banaya hai?',
      options: ['Google', 'Facebook', 'Amazon', 'Apple'],
      answer: 'Facebook'
    },
    {
      questionText: 'Javascript extension kya hai?',
      options: ['.py', '.java', '.js', '.html'],
      answer: '.js'
    }
  ];

  // 2. Handlers
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
      setStep('result'); // Quiz khatam, result dikhao
    }
  };

  // 3. UI Rendering
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      
      {/* STEP 1: LOGIN */}
      {step === 'login' && (
        <div>
          <h2>Login to Start</h2>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required /><br/><br/>
            <button type="submit">Start Quiz</button>
          </form>
        </div>
      )}

      {/* STEP 2: QUIZ */}
      {step === 'quiz' && (
        <div>
          <h3>Question {currentQuestion + 1} / {questions.length}</h3>
          <p>{questions[currentQuestion].questionText}</p>
          {questions[currentQuestion].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt)} style={{ margin: '5px' }}>
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* STEP 3: RESULT */}
      {step === 'result' && (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Aapka Score: <b>{score}</b> / {questions.length}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}

    </div>
  );
}

export default App;