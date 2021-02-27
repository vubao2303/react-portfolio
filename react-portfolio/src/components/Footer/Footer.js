import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
    <div className="text-center">
      <a className="footer-link" href="mailto:bbvut@gmail.com" className="contact-info">Contact Me</a>
      <a className="footer-link"
      href="./css/Resume.pdf" download>
        Résumé
      </a>
    </div>
  </footer>
  );
}

export default Footer;