import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="icon" src="/home.png" alt="Home" />
          </Link>
          <Link to="/about" className="navbar-logo">
            <img className="icon" src="/profile.png" alt="About" />
          </Link>
          <Link to="/contact" className="navbar-logo">
            <img className="icon" src="/phone.png" alt="Contact" />
          </Link>
          <Link to="/" className="navbar-logo">
            <img className="icon" src="/website.png" alt="Website" />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
