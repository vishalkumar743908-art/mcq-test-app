import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
  const [userName, setUserName] = useState("");
  const [scoreData, setScoreData] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login setUserName={setUserName} />} />
          <Route 
            path="/quiz" 
            element={userName ? <Quiz userName={userName} setScoreData={setScoreData} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/result" 
            element={scoreData ? <Result scoreData={scoreData} userName={userName} /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;