import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  { id: 0, q: "Python extension kya hai?", opts: [".py", ".txt", ".js", ".c"], a: ".py" },
  { id: 1, q: "C language kisne banayi?", opts: ["Dennis Ritchie", "James Gosling", "Guido", "Bjarne"], a: "Dennis Ritchie" },
  { id: 2, q: "React JS kya hai?", opts: ["Library", "Framework", "Language", "OS"], a: "Library" },
  { id: 3, q: "HTML ka full form?", opts: ["HyperText Markup", "HighText", "HyperTool", "None"], a: "HyperText Markup" },
  { id: 4, q: "CSS ka use hota hai?", opts: ["Design", "Logic", "Database", "Backend"], a: "Design" },
  { id: 5, q: "SQL ka use?", opts: ["Database", "Styling", "Animation", "Networking"], a: "Database" },
  { id: 6, q: "Java kisne banayi?", opts: ["James Gosling", "Guido", "Dennis", "Bjarne"], a: "James Gosling" },
  { id: 7, q: "Array index kahan se start hota hai?", opts: ["0", "1", "-1", "Any"], a: "0" },
  { id: 8, q: "C++ mein output ke liye?", opts: ["cout", "printf", "print", "echo"], a: "cout" },
  { id: 9, q: "Variables declare karne ke liye JS mein?", opts: ["let", "var", "const", "All"], a: "All" }
];

const Quiz = ({ userName, setScoreData }) => {
  const [seconds, setSeconds] = useState(120);
  const [userAnswers, setUserAnswers] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.a) correctCount++;
    });
    setScoreData({
      total: questions.length,
      correct: correctCount,
      wrong: questions.length - correctCount,
      percent: (correctCount / questions.length) * 100
    });
    navigate('/result');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [userAnswers]);

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3>User: {userName}</h3>
        <div className="timer-box">Time: {seconds}s</div>
      </div>
      {questions.map((q, index) => (
        <div key={index} className="q-card">
          <p><strong>{index + 1}. {q.q}</strong></p>
          {q.opts.map((opt) => (
            <label key={opt}>
              <input type="radio" name={`q${index}`} value={opt} onChange={() => setUserAnswers({...userAnswers, [index]: opt})} /> {opt}
            </label>
          ))}
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>Finish Test</button>
    </div>
  );
};

export default Quiz;