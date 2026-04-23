import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: 'React kisne develop kiya hai?',
      options: ['Google', 'Facebook', 'Amazon', 'Apple'],
      answer: 'Facebook'
    },
    {
      questionText: 'Javascript file ka extension kya hai?',
      options: ['.js', '.py', '.java', '.html'],
      answer: '.js'
    }
  ];

  // Inline CSS Styles
  const styles = {
    mainContainer: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2040&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'Arial, sans-serif',
      color: 'white',
      padding: '20px'
    },
    glassBox: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      borderRadius: '20px',
      padding: '40px',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      borderBottom: '2px solid white',
      color: 'white',
      outline: 'none'
    },
    button: {
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      borderRadius: '25px',
      border: 'none',
      background: 'white',
      color: '#333',
      fontWeight: 'bold',
      cursor: 'pointer'
    },
    optionBtn: {
      display: 'block',
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      background: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      color: 'white',
      borderRadius: '10px',
      cursor: 'pointer'
    }
  };

  const handleAnswer = (selected) => {
    if (selected === questions[currentQuestion].answer) setScore(score + 1);
    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setStep('result');
  };

  return (
    <div style={styles.mainContainer}>
      {step === 'login' && (
        <div style={styles.glassBox}>
          <h1>Login</h1>
          <input style={styles.input} type="text" placeholder="Username" />
          <input style={styles.input} type="password" placeholder="Password" />
          <button style={styles.button} onClick={() => setStep('quiz')}>Login</button>
        </div>
      )}

      {step === 'quiz' && (
        <div style={styles.glassBox}>
          <p>Question {currentQuestion + 1} / {questions.length}</p>
          <h2>{questions[currentQuestion].questionText}</h2>
          {questions[currentQuestion].options.map((opt, i) => (
            <button key={i} style={styles.optionBtn} onClick={() => handleAnswer(opt)}>{opt}</button>
          ))}
        </div>
      )}

      {step === 'result' && (
        <div style={styles.glassBox}>
          <h2>Result</h2>
          <p style={{fontSize: '24px'}}>Score: {score} / {questions.length}</p>
          <button style={styles.button} onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;