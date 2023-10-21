import React, { useState } from 'react';
import logo from "../thensil.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar2.css';

const Navbar2 = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  }

  return (
    <nav className='navbar'>
      <div className='logo-part'>
        <img src={logo} alt="logo" />
      </div>
      <div className={`nav-links ${showNavLinks ? 'show-nav-links' : ''}`}>
        <Link to="/home" className='nav-link'>Home</Link>
        <Link to="/about" className='nav-link'>About</Link>
        <Link to="/blog" className='nav-link'>Blog</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
      </div>
      <div className='login-part'>
        <Link to="/" className='nav-login'>Login</Link>
      </div>
      <div className='burger-menu' onClick={toggleNavLinks}>
        <GiHamburgerMenu className='burger-icon' />
      </div>
    </nav>
  );
}

export default Navbar2;
