import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('login');
  const [score, setScore] = useState(null);
  // User ke answers store karne ke liye state
  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    { id: 1, questionText: 'React kisne develop kiya hai?', options: ['Google', 'Facebook', 'Amazon', 'Apple'], answer: 'Facebook' },
    { id: 2, questionText: 'Javascript extension kya hai?', options: ['.js', '.py', '.java', '.html'], answer: '.js' },
    { id: 3, questionText: 'HTML ka full form kya hai?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'None'], answer: 'Hyper Text Markup Language' }
  ];

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
      padding: '40px 20px'
    },
    glassBox: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      borderRadius: '20px',
      padding: '30px',
      width: '100%',
      maxWidth: '600px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    },
    questionCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '15px',
      borderRadius: '10px',
      marginBottom: '20px',
      textAlign: 'left'
    },
    optionLabel: {
      display: 'block',
      margin: '10px 0',
      cursor: 'pointer',
      fontSize: '16px'
    },
    button: {
      width: '100%',
      padding: '15px',
      borderRadius: '25px',
      border: 'none',
      background: '#fff',
      color: '#333',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '18px',
      marginTop: '10px'
    }
  };

  const handleOptionChange = (qId, selectedOption) => {
    setUserAnswers({ ...userAnswers, [qId]: selectedOption });
  };

  const handleSubmit = () => {
    let finalScore = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setStep('result');
  };

  return (
    <div style={styles.mainContainer}>
      {step === 'login' && (
        <div style={{...styles.glassBox, maxWidth: '400px', textAlign: 'center'}}>
          <h1>Login</h1>
          <input style={{width: '100%', padding: '12px', margin: '10px 0', borderRadius: '5px', border: 'none'}} type="text" placeholder="Username" />
          <button style={styles.button} onClick={() => setStep('quiz')}>Start Quiz</button>
        </div>
      )}

      {step === 'quiz' && (
        <div style={styles.glassBox}>
          <h2 style={{textAlign: 'center', marginBottom: '30px'}}>All Questions</h2>
          
          {questions.map((q, index) => (
            <div key={q.id} style={styles.questionCard}>
              <p style={{fontWeight: 'bold', marginBottom: '10px'}}>{index + 1}. {q.questionText}</p>
              {q.options.map((opt) => (
                <label key={opt} style={styles.optionLabel}>
                  <input 
                    type="radio" 
                    name={question-${q.id}} 
                    value={opt} 
                    onChange={() => handleOptionChange(q.id, opt)}
                    style={{marginRight: '10px'}}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}

          <button style={styles.button} onClick={handleSubmit}>Submit Quiz</button>
        </div>
      )}

      {step === 'result' && (
        <div style={{...styles.glassBox, textAlign: 'center'}}>
          <h2>Quiz Result</h2>
          <p style={{fontSize: '30px', margin: '20px 0'}}>Score: {score} / {questions.length}</p>
          <button style={styles.button} onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;