import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

function Navbar() {
  const openNav = () => {
    document.getElementById("mobile-menu").style.width = "100%";
  };
  const closeNav = () => {
    document.getElementById("mobile-menu").style.width = "0%";
  };

  return (
    <div>
      <header className="navbar">
        <img src={logo} className="logo" alt="" />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/" className="nav-link active">
                Tours
              </a>
            </li>
          </ul>
        </nav>
        <button className="menu" onClick={openNav}>
          Menu
        </button>
      </header>
      <div id="mobile-menu" className="overlay">
        <div className="close" onClick={closeNav}>
          &times;
        </div>
        <ul className="overlay-content">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Tours</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
