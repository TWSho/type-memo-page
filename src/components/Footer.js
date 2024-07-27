// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p><Link to="/privacy-policy" className="privacy-link">Privacy Policy</Link></p>
      <p>&copy; 2024 Type Memo</p>
    </footer>
  );
};

export default Footer;
