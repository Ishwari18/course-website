import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <ul className="Footer Footer-links">
          <li>
            <Link className="brandname " to="/">
              Upthrust
            </Link>
          </li>
          <li>
            <Link className="footer-menu" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="footer-menu" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="lastline-links"><p>9356160045 , ishwarirele18@gmail.com</p><p>@2023</p></li>
        </ul>
     
      </div>
    </>
  );
};
