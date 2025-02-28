import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <React.Fragement>
    <nav>
      <div className="logo">FlavorFinder</div>
      <div className="auth-buttons">
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>
    </nav>
    </React.Fragement>
  );
};

export default Navbar;