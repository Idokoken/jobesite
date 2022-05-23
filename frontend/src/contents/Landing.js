import React from "react";
import logo from "../assets/images/logo.png";
import main from "../assets/images/main.jpg";
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <nav className="text-info">
        <img src={logo} alt="logo" height="30" width="30" />
        Wjobs
        <p>all wee</p>
      </nav>
      <div className="container page">
        <div className="info">
          <hi>
            Job <span>Tracking</span>App
          </hi>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <buuton className="btn btn-info">Login/Register</buuton>
        </div>
        <img src={main} alt="job hunt" className="img-fluid main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav: {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: pink;
    color: red;
  }
  .page {
    background: black;
    display: grid;
    align-items: center;
  }
`;

export default Landing;
