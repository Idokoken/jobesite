import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;

  .nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const {  logoutUser, user } = useAppContext();

  return (
    <Wrapper>
      <div className="nav-center nav px-3">
        <div className="d-flex">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png"
              alt="brand"
              width="30"
              height="30"
              className="d-inline-block align-text-top me-2"
            />
          </Link>
          <h3 className="logo-text">Wjobs</h3>
        </div>
        <div className="d-flex">
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user && user.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropDown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => logoutUser()}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
