import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-logo">Renter's Review</div>
      <div>
        <div id="menu-container">
        <div className="menu">
          <h3> OUR COMPANY</h3>
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
          <h3>ADVERTISE WITH US</h3>
          <ul>
          <li>
              <a>
                Advertise
              </a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3>LET US HELP</h3>
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
    </div>
  );
};

export default Footer;
