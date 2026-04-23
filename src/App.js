import React, { useState } from 'react';
import './App.css'; // Make sure your CSS file exists

function App() {
  // Questions ka array
  const questions = [
    {
      questionText: 'Python ka extension kya hai?',
      answerOptions: [
        { answerText: '.js', isCorrect: false },
        { answerText: '.py', isCorrect: true },
        { answerText: '.html', isCorrect: false },
        { answerText: '.cpp', isCorrect: false },
      ],
    },
    {
      questionText: 'React kisne develop kiya hai?',
      answerOptions: [
        { answerText: 'Google', isCorrect: false },
        { answerText: 'Apple', isCorrect: false },
        { answerText: 'Facebook', isCorrect: true },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); // Yahan Result screen ON ho jayegi
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        /* Result Section */
        <div className='score-section'>
          <h2>Quiz Finished!</h2>
          <p>Aapne {questions.length} mein se {score} sahi jawab diye.</p>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        /* Quiz Section */
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button 
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;