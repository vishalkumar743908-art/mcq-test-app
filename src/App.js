import React, { useState } from 'react';



function App() {
  const [step, setStep] = useState('login');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const questions = [
    { id: 'q1', text: 'React kisne develop kiya hai?', options: ['Google', 'Facebook', 'Amazon', 'Apple'], answer: 'Facebook' },
    { id: 'q2', text: 'Javascript extension kya hai?', options: ['.js', '.py', '.java', '.html'], answer: '.js' },
    { id: 'q3', text: 'HTML ka full form kya hai?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'None'], answer: 'Hyper Text Markup Language' },
    { id: 'q4', text: 'CSS stands for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'], answer: 'Cascading Style Sheets' }
  ];

  const styles = {
    mainContainer: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      fontFamily: 'sans-serif',
      padding: '40px 10px'
    },
    glassBox: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      borderRadius: '20px',
      padding: '30px',
      width: '100%',
      maxWidth: '550px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      maxHeight: '90vh',
      overflowY: 'auto' // Saare sawal agar zyada honge toh scroll ho jayenge
    },
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '20px',
      borderRadius: '15px',
      marginBottom: '15px',
      textAlign: 'left'
    },
    option: {
      display: 'block',
      margin: '12px 0',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '5px',
      background: 'rgba(255,255,255,0.05)'
    },
    btn: {
      width: '100%',
      padding: '15px',
      borderRadius: '30px',
      border: 'none',
      background: '#fff',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px'
    }
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.answer) s++;
    });
    setScore(s);
    setStep('result');
  };

  return (
    <div style={styles.mainContainer}>
      {step === 'login' ? (
        <div style={{...styles.glassBox, maxWidth: '380px', textAlign: 'center'}}>
          <h1 style={{marginBottom: '20px'}}>Ready?</h1>
          <button style={styles.btn} onClick={() => setStep('quiz')}>Start Exam</button>
        </div>
      ) : step === 'quiz' ? (
        <div style={styles.glassBox} className="custom-scroll">
          <h2 style={{textAlign: 'center', marginBottom: '25px'}}>MCQ Test</h2>
          {questions.map((q, idx) => (
            <div key={q.id} style={styles.card}>
              <p style={{fontSize: '18px', marginBottom: '10px'}}>{idx + 1}. {q.text}</p>
              {q.options.map(opt => (
                <label key={opt} style={styles.option}>
                  <input 
                    type="radio" 
                    name={q.id} 
                    onChange={() => setUserAnswers({...userAnswers, [q.id]: opt})}
                    style={{marginRight: '10px'}}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button style={styles.btn} onClick={handleSubmit}>Finish & Submit</button>
        </div>
      ) : (
        <div style={{...styles.glassBox, textAlign: 'center'}}>
          <h1>Result</h1>
          <p style={{fontSize: '40px', margin: '20px 0'}}>{score} / {questions.length}</p>
          <button style={styles.btn} onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;