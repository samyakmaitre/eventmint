import React from 'react';
import '../assets/styles/Footer.css';

// import React from 'react';


// function Footer() {
//   return (
//     <footer>
//       <p>&copy; 2024 BookMyShow. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h5>Column 1</h5>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Column 2</h5>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Column 3</h5>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Column 4</h5>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Column 5</h5>
          <ul>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BookMyShow. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
