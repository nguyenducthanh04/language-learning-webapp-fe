// Footer.jsx
import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h2>Học ngôn ngữ cùng YuYan</h2>
        <button className="learn-btn">Học ngay</button>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4>Khóa học ngôn ngữ</h4>
          <ul>
            <li>Học tiếng Trung Quốc</li>
            <li>Học tiếng Hàn Quốc</li>
            <li>Học tiếng Việt Nam</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About LingoDeer</h4>
          <ul>
            <li>The LingoDeer Method</li>
            <li>LingoDeer for iOS</li>
            <li>LingoDeer for Android</li>
            <li>Help / FAQ</li>
            <li>Email Support</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow us</h4>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Medium</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Partnership</h4>
          <ul>
            <li>LingoDeer for Business</li>
            <li>LingoDeer for Educators</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
