import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-logo">Renter's Review</div>
      <div>
        <div id="menu-container">
        <div className="menu">
          <h3>Our Company</h3>
          <ul>
            <li>
              <a>
                About Us
              </a>
            </li>
            <li>
              <a>
                Privacy Policy
              </a>
            </li>
            <li>
              <a>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3>Advertise With Us</h3>
          <ul>
          <li>
              <a>
                Advertise
              </a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3>Let Us Help</h3>
          <ul>
          <li>
              <a>
                Contact Us
              </a>
            </li>
            <li>
              <a>
                Admin Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div style={{paddingTop:40, paddingBottom: 40}}>
        Social Media Icons
      </div>
      <div style={{paddingTop:40, paddingBottom: 40}}>
        Equal Housing Icon
      </div>
    </div>
  );
};

export default Footer;
