import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="nav-link p-2 m-1">
          <i className="fa-brands fa-react" aria-hidden="true"></i> Yuliya Tasheva
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse navbar-light bg-light" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projectGallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                ProjectGallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
