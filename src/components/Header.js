// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="home-link">Type Memo</Link>
      </nav>
    </header>
  );
};

export default Header;
