// src/components/MainContent.js
import React from 'react';
import appStoreBadge from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

const MainContent = () => {
  return (
    <main>
      <h3>友達の性格タイプを簡単に記録しよう！</h3>

      <a href="https://apps.apple.com/app/id6578456894" target="_blank" rel="noopener noreferrer">
        <img src={appStoreBadge} alt="Download on the App Store" className="app-store-badge" />
      </a>
    </main>
  );
};

export default MainContent;
