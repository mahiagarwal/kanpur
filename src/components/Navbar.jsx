
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="header">
      <Link className="Logo" to="/">Logo</Link>
      <div className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/services">Services</Link>
        <Link className="nav-link" to="/contact">Contact</Link> 
      </div>
    </nav>
  );
};

export default Navbar;
