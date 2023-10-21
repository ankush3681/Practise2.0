import React, { useState } from "react";
import logo from "../thensil.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMidNav = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
    
  };
  window.addEventListener("resize",()=>{
    if (window.innerWidth > 800){
      setIsOpen(false);
    }
  })
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mid-nav-section">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        <div className="end-nav-section">
          <Link to="/" className="nav-login">
            Login
          </Link>
          <div className="burger-menu" onClick={toggleMidNav}>
            <GiHamburgerMenu className="burger-icon" />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="dropdown-nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      )}
    </div>

  );
};

export default Navbar;
