import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const Wrapper = styled.div`
  box-shadow: 5px 5px 5px 5px #eee6e6;
`;

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { logoutUser, user } = useAppContext();

  return (
    <Wrapper>
      <nav className="navbar navbar-expand-sm sticky-top navbar-primary bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top me-2"
            />
            Wjobs
          </Link>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    register
                  </Link>
                </li>
              </>

              <div className="btn-container">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowLogout(!showLogout)}
                >
                  <i className="fa-solid fa-circle-user"></i>

                  {user && user.name}
                  <i className="fa-solid fa-caret-down"></i>
                </button>
                <div
                  className={showLogout ? "dropdown show-dropdown" : "dropDown"}
                >
                  <button
                    type="button"
                    className="dropdown-btn"
                    onClick={() => logoutUser()}
                  >
                    logout
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
