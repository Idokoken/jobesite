import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;

  .bg-light {
    background: white !important;
    box-shadow: 5px 5px 5px 5px #d3c7c7;
  }
  .nav-link,
  .navbar-brand {
    color: rgba(211, 15, 69, 1) !important;
    font-weight: 500;
  }
`;

function Header() {
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              <img
                src="/images/logo.png"
                alt="brand"
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />
              Wjobs
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/all">
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Header;
