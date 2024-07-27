// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon_t.png';


const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <img src={icon} alt="Type Memo Icon" className="header-icon" />
        <Link to="/" className="home-link">Type Memo</Link>
      </nav>
    </header>
  );
};

export default Header;
