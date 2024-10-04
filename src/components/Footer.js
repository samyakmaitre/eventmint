import React from "react";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h5>About Us</h5>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Support</h5>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Live Chat</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Services</h5>
          <ul>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Mobile App</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Follow Us</h5>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BookMyShow. All rights reserved.</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
