import React, { useState, useEffect } from 'react';

function App() {
  const [step, setStep] = useState('login');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes for 20 questions

  const questions = [
    { id: 'q1', text: 'React kisne develop kiya hai?', options: ['Google', 'Facebook', 'Amazon', 'Apple'], answer: 'Facebook' },
    { id: 'q2', text: 'Javascript extension kya hai?', options: ['.js', '.py', '.java', '.html'], answer: '.js' },
    { id: 'q3', text: 'HTML ka full form kya hai?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'None'], answer: 'Hyper Text Markup Language' },
    { id: 'q4', text: 'CSS stands for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets'], answer: 'Cascading Style Sheets' },
    { id: 'q5', text: 'SQL ka use kiske liye hota hai?', options: ['Database', 'Styling', 'Operating System', 'Hardware'], answer: 'Database' },
    { id: 'q6', text: 'Python mein list banane ke liye kaunsa bracket use hota hai?', options: ['[]', '{}', '()', '<>'], answer: '[]' },
    { id: 'q7', text: 'HTTP ka S kya represent karta hai?', options: ['Secure', 'Simple', 'Smart', 'Standard'], answer: 'Secure' },
    { id: 'q8', text: 'WWW kisne invent kiya?', options: ['Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Mark'], answer: 'Tim Berners-Lee' },
    { id: 'q9', text: 'C++ mein output ke liye kya use hota hai?', options: ['cout', 'print', 'printf', 'echo'], answer: 'cout' },
    { id: 'q10', text: 'React mein state update karne ke liye kya use hota hai?', options: ['useState', 'useEffect', 'useRef', 'useMemo'], answer: 'useState' },
    // Yahan se aap apne aur 10 sawal add kar sakte hain:
    { id: 'q11', text: 'Sawal 11 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q12', text: 'Sawal 12 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q13', text: 'Sawal 13 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q14', text: 'Sawal 14 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q15', text: 'Sawal 15 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q16', text: 'Sawal 16 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q17', text: 'Sawal 17 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q18', text: 'Sawal 18 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q19', text: 'Sawal 19 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' },
    { id: 'q20', text: 'Sawal 20 ka text yahan likhein?', options: ['Opt A', 'Opt B', 'Opt C', 'Opt D'], answer: 'Opt A' }
  ];

  useEffect(() => {
    if (step === 'quiz' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && step === 'quiz') {
      handleSubmit();
    }
  }, [timeLeft, step]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return ${mins}:${secs < 10 ? '0' : ''}${secs};
  };

  const handleSubmit = () => {
    let s = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.answer) s++;
    });
    setScore(s);
    setStep('result');
  };

  const styles = {
    mainContainer: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '20px'
    },
    glassBox: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      borderRadius: '20px',
      padding: '30px',
      width: '100%',
      maxWidth: '650px',
      color: 'white',
      maxHeight: '90vh',
      overflowY: 'auto',
      border: '1px solid rgba(255,255,255,0.2)'
    },
    timerSticky: {
      position: 'sticky',
      top: '0',
      background: timeLeft < 120 ? '#ff4d4d' : 'rgba(255,255,255,0.2)',
      padding: '15px',
      borderRadius: '10px',
      textAlign: 'center',
      fontSize: '22px',
      fontWeight: 'bold',
      marginBottom: '20px',
      zIndex: '10',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
    },
    card: { background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '15px', marginBottom: '15px' },
    btn: { width: '100%', padding: '15px', borderRadius: '30px', border: 'none', background: '#fff', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px', fontSize: '18px' }
  };

  return (
    <div style={styles.mainContainer}>
      {step === 'login' ? (
        <div style={{...styles.glassBox, maxWidth: '400px', textAlign: 'center'}}>
          <h1>Final MCQ Test</h1>
          <p style={{marginBottom: '20px'}}>Total Questions: 20 <br/> Time: 20 Minutes</p>
          <button style={styles.btn} onClick={() => setStep('quiz')}>Start Exam</button>
        </div>
      ) : step === 'quiz' ? (
        <div style={styles.glassBox}>
          <div style={styles.timerSticky}>⏱ Time Left: {formatTime(timeLeft)}</div>
          {questions.map((q, idx) => (
            <div key={q.id} style={styles.card}>
              <p style={{fontSize: '18px', fontWeight: 'bold'}}>{idx + 1}. {q.text}</p>
              {q.options.map(opt => (
                <label key={opt} style={{display: 'block', margin: '12px 0', cursor: 'pointer', fontSize: '16px'}}>
                  <input type="radio" name={q.id} onChange={() => setUserAnswers({...userAnswers, [q.id]: opt})} style={{marginRight: '12px'}} />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button style={styles.btn} onClick={handleSubmit}>Submit My Test</button>
        </div>
      ) : (
        <div style={{...styles.glassBox, textAlign: 'center'}}>
          <h1 style={{fontSize: '40px'}}>🎉 Exam Done!</h1>
          <p style={{fontSize: '30px', margin: '20px 0'}}>Your Final Score: <br/> <b>{score} / {questions.length}</b></p>
          <button style={styles.btn} onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default App;