// Navbar.js
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Import the burger icon from React Icons
// import './Nav.css'; // Create a CSS file for styling

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>

      {/* Conditional rendering based on screen width */}
      {window.innerWidth > 800 ? (
        <div className="navbar-links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      ) : (
        <div className="navbar-burger" onClick={toggleNavbar}>
          <FiMenu size={30} />
        </div>
      )}

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="navbar-dropdown">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
