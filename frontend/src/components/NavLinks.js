import React from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => {
                const { id, text, path, icon } = link;
                return (
                  <li className="nav-item" key={id}>
                    <NavLink
                      to={path}
                      onClick={toggleSidebar}
                      className={(isActive) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      <span className="icon">{icon}</span>
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;
