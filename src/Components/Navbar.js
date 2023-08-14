import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/Navbar.css"; 

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Course
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Add Login and Signup buttons with Link */}
            <div>
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
