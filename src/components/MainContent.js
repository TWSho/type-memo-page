// src/components/MainContent.js
import React from 'react';
import appStoreBadge from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';

const MainContent = () => {
  return (
    <main className='main-content'>
      
    <div className="main-body">

      <p>Type Memoは、友達の性格タイプを簡単に記録し、管理するためのシンプルで直感的なアプリです。</p>
      
      <h3>Type Memoを使う理由:</h3>
      <p>Type Memoを使えば、友達の性格タイプをすぐに記録し、振り返ることができます。</p>
      <p>友達の性格タイプを理解することで、彼らの性格に合った関わり方をし、より円滑な人間関係を築くことができます。</p>

      <h3>こんな方におすすめ:</h3>
      <ul>
        <li>性格診断テストを楽しむ人</li>
        <li>対人関係を向上させたい人</li>
        <li>心理学の学生や愛好者</li>
      </ul>

      <p>今すぐType Memoをダウンロードして、より良い人間関係を築きましょう！</p>
      </div>


      <a href="https://apps.apple.com/app/id6578456894" target="_blank" rel="noopener noreferrer">
        <img src={appStoreBadge} alt="Download on the App Store" className="app-store-badge" />
      </a>
    </main>
  );
};

export default MainContent;
