import React, { useState, useEffect } from 'react';

function App() {
  const [step, setStep] = useState('login');
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 Minutes

  // 20 Questions List
  const questions = [
    { id: 'q1', text: 'React kisne develop kiya hai?', options: ['Google', 'Facebook', 'Amazon', 'Apple'], answer: 'Facebook' },
    { id: 'q2', text: 'Javascript extension kya hai?', options: ['.js', '.py', '.java', '.html'], answer: '.js' },
    { id: 'q3', text: 'HTML ka full form kya hai?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'None'], answer: 'Hyper Text Markup Language' },
    { id: 'q4', text: 'SQL ka use kiske liye hota hai?', options: ['Database', 'Styling', 'Operating System'], answer: 'Database' },
    { id: 'q5', text: 'Python mein list ke liye bracket?', options: ['[]', '{}', '()'], answer: '[]' },
    { id: 'q6', text: 'C++ mein output command?', options: ['cout', 'print', 'printf'], answer: 'cout' },
    { id: 'q7', text: 'CSS ka full form?', options: ['Cascading Style Sheets', 'Color Style', 'None'], answer: 'Cascading Style Sheets' },
    { id: 'q8', text: 'WWW kisne banaya?', options: ['Tim Berners-Lee', 'Bill Gates', 'Jobs'], answer: 'Tim Berners-Lee' },
    { id: 'q9', text: 'IP ka full form?', options: ['Internet Protocol', 'Internal Port', 'Index Page'], answer: 'Internet Protocol' },
    { id: 'q10', text: 'React Hook for state?', options: ['useState', 'useEffect', 'useRef'], answer: 'useState' },
    { id: 'q11', text: 'RAM ka full form?', options: ['Random Access Memory', 'Read Any Memory', 'None'], answer: 'Random Access Memory' },
    { id: 'q12', text: 'CPU ka brain?', options: ['ALU', 'CU', 'Both'], answer: 'Both' },
    { id: 'q13', text: 'Binary base kya hai?', options: ['2', '8', '10'], answer: '2' },
    { id: 'q14', text: 'OS ka example?', options: ['Windows', 'Chrome', 'React'], answer: 'Windows' },
    { id: 'q15', text: 'DBMS full form?', options: ['Database Management System', 'Data Base Main', 'None'], answer: 'Database Management System' },
    { id: 'q16', text: 'Primary Key kya hai?', options: ['Unique ID', 'Normal ID', 'Duplicate'], answer: 'Unique ID' },
    { id: 'q17', text: 'HTTP port?', options: ['80', '443', '21'], answer: '80' },
    { id: 'q18', text: 'Java extension?', options: ['.java', '.js', '.class'], answer: '.java' },
    { id: 'q19', text: 'Google Search Engine kab aaya?', options: ['1998', '2005', '1990'], answer: '1998' },
    { id: 'q20', text: 'AI ka full form?', options: ['Artificial Intelligence', 'Auto Info', 'None'], answer: 'Artificial Intelligence' }
  ];

  useEffect(() => {
    if (step === 'quiz' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && step === 'quiz') {
      handleSubmit();
    }
  }, [timeLeft, step]);

  const handleSubmit = () => {
    let s = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.answer) s++;
    });
    setScore(s);
    setStep('result');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const styles = {
    main: { minHeight: '100vh', background: '#1a1a1a', color: 'white', fontFamily: 'Arial', padding: '20px', display: 'flex', justifyContent: 'center' },
    box: { background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '15px', width: '100%', maxWidth: '600px', border: '1px solid #444' },
    timer: { position: 'sticky', top: '0', background: '#ff4d4d', padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' },
    card: { background: '#222', padding: '15px', borderRadius: '10px', marginBottom: '15px' },
    btn: { width: '100%', padding: '15px', background: 'white', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }
  };

  return (
    <div style={styles.main}>
      {step === 'login' ? (
        <div style={{...styles.box, textAlign: 'center', height: 'fit-content'}}>
          <h1>Computer Quiz</h1>
          <p>20 Questions | 20 Minutes</p>
          <button style={styles.btn} onClick={() => setStep('quiz')}>Start Exam</button>
        </div>
      ) : step === 'quiz' ? (
        <div style={styles.box}>
          <div style={styles.timer}>Time Left: {formatTime(timeLeft)}</div>
          {questions.map((q, i) => (
            <div key={q.id} style={styles.card}>
              <p>{i + 1}. {q.text}</p>
              {q.options.map(opt => (
                <label key={opt} style={{display: 'block', margin: '10px 0'}}>
                  <input type="radio" name={q.id} onChange={() => setUserAnswers({...userAnswers, [q.id]: opt})} /> {opt}
                </label>
              ))}
            </div>
          ))}
          <button style={styles.btn} onClick={handleSubmit}>Submit Test</button>
        </div>
      ) : (
        <div style={{...styles.box, textAlign: 'center', height: 'fit-content'}}>
          <h1>Result: {score} / {questions.length}</h1>
          <button style={styles.btn} onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;