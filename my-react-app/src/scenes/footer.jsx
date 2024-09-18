import React from 'react';
import '../styles/footer.scss'; // Import the SCSS file for styling

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-info">
        <h3>Contact Us</h3>
        <p>123 Main Street, Makati City, Philippines</p>
        <p>Phone: +63 2 1234 5678</p>
        <p>Email: support@bank.com</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Branch Locator</a></li>
          <li><a href="#">ATM Locations</a></li>
          <li><a href="#">Online Banking</a></li>
          <li><a href="#">Mobile App</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Your Bank Name. All rights reserved.</p>
      <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </div>
  </footer>
);

export default Footer;
