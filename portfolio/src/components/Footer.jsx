import React from "react";
import "./Footer.css"; // You can define your styles in a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Your company description goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            {/* Add your social media icons here */}
      {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div> */}
      <div className="footer-bottom">
        <p>&copy; 2024 H.H./maddealer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
