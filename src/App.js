// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/type-memo-page" element={<MainContent />} />
          <Route path="/type-memo-page/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/type-memo-page/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
