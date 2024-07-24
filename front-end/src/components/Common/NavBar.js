import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; // Adjust the path as needed
import './NavBar.css';

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">CureDesk</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Hospitals</Link>
          {user ? (
            <>
              <span className="navbar-user">Hi, {user.name}</span>
              <button onClick={handleLogout} className="navbar-button">Logout</button>
            </>
          ) : (
            <Link to="/signin" className="navbar-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
