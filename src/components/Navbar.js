import React from 'react';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <span>GILLY'S</span>
        <span>Koramangala</span>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
