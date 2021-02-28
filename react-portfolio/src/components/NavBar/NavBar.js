import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-md-between justify-content-center" id="top-nav">
  <a className="navbar-brand text-center" href="/react-portfolio" id="b-name">
    <h2 >B Tram Vu</h2>
  </a>
  <ul className="nav flex-nowrap" id="top-nav-links">
  
    <li className="nav-item">
      <a target="_blank" id="linked" href="https://www.linkedin.com/in/b-tram-vu/"><i
          className="fa fa-linkedin fa_custom fa-3x social"></i></a>
    </li>
   
    <li className="nav-item">
      <a target="_blank" href="https://github.com/vubao2303"><i id="social-em" className="fab fa-github-square fa-3x social"></i></a>
    </li>
  </ul>
</nav>
  );
}

export default NavBar;
