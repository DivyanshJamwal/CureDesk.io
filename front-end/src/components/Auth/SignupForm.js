import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext'; // Adjust the path as needed
import './Auth.css';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register({ email, password });
    };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
        <div className="form-link">
          <span>Already have an account? <a href="/signin">Login</a></span>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
