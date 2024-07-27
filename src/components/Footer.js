// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p><Link to="/type-memo-page/contact" className="link">Contact</Link></p>
      <p><Link to="/type-memo-page/privacy-policy" className="link">Privacy Policy</Link></p>
      <p>&copy; 2024 Type Memo</p>
    </footer>
  );
};

export default Footer;
