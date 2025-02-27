import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">FlavorFinder</div>
      <div className="auth-buttons">
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;