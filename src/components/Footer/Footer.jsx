import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          made with{" "}
          <span>
            <i className="icon ion-md-heart"></i>
          </span>{" "}
          in Port-of-Spain
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
