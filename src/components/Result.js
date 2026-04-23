import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserName }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "1234") {
      setUserName(user);
      navigate('/quiz');
    } else {
      alert("Invalid login!");
    }
  };

  return (
    <div className="auth-wrapper"> {/* Ye container background color dega */}
      <div className="login-box">   {/* Ye container dark blue box banayega */}
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="Username" 
            onChange={(e) => setUser(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="****" 
            onChange={(e) => setPass(e.target.value)} 
            required 
          />
          <div className="extra-options">
            <label><input type="checkbox" /> Remember me</label>
            <span>Forgot Password?</span>
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;