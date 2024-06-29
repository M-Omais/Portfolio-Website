import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="https://m-omais.github.io/Portfolio-Website/" className="navbar-logo">
          <img className='icon' src='./home.png'/>
        </Link>
        <Link to="https://m-omais.github.io/Portfolio-Website//about" className="navbar-logo">
          <img className='icon' src='./profile.png'/>
        </Link>
        <Link to="https://m-omais.github.io/Portfolio-Website/contact" className="navbar-logo">
          <img className='icon' src='./phone.png'/>
        </Link>
        <Link to="/" className="navbar-logo">
          <img className='icon' src='./website.png'/>
        </Link>
       
      </div>

    </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
