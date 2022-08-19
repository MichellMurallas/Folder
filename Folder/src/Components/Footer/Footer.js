import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-info">
        <h1>Miguel Quintero</h1>
      <p>Based in Bogotà</p>
    </div>
    <div className="footer-contact" >
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
    </div>
    <div className="footer-sns" >
    <div className="dising-by">
        Dising By Miguel Quintero
    </div>
    <div className="sns-links">
    <a href="https://linkeding.com" target="blank" rel="noreferrer" >
        <i className="fab fa-linkedin linkeding"></i>
    </a>

    <a href="https://twitter.com" target="blank" rel="noreferrer">
        <i className="fab fa-twitter twitter"></i>
    </a>

    <a href="https://facebook.com" target="blank" rel="noreferrer">
        <i className="fab fa-facebook facebook"></i>
    </a>
    </div>
    </div>
    
    </footer>
  )
}

export default Footer
