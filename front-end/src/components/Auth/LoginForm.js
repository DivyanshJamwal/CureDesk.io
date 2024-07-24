import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext'; // Adjust the path as needed
import './Auth.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
        <div className="form-link">
          <span>Don't have an account? <a href="/signup">Register</a></span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
