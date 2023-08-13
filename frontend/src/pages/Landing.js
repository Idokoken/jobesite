import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { tablet } from "../Responsive";
import { useAppContext } from "../context/AppContext";

const Wrapper = styled.main`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(198, 208, 206);
  font-family: "Poppins", sans-serif;

  nav {
    display: flex;
    align-items: center;
    height: 50px;
  }

  nav img {
    border-radius: 5px;
    margin: 0 20px;
  }
  h1 {
    color: rgba(211, 15, 69, 1);
    font-family: "Rampart One", cursive;
  }

  .hero {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .page {
    /* background: #dce4e2; */
    min-height: calc(100vh - 60px);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${tablet({ flexDirection: "row", alignItems: "flex-start" })}
  }

  .page div {
    flex: 100%;
    ${tablet({ flex: "50%" })}
  }
  .hero {
    height: 70%;
    width: 100%;
  }
  img.main-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
  .login {
    background: rgba(211, 15, 69, 1);
    color: white;
    margin-top: 10px;
  }
`;

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="pt-3">
      <nav className="ps-4">
        <img src="/images/logo.png" alt="brand" height="40" width="40" />
        <h1>World jobs</h1>
      </nav>
      <div className="page pt-4 px-4">
        <div className="info mx-3">
          <h2>Job Tracking App</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris- nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/login" className="btn login">
            Login/Register
          </Link>
        </div>
        <div className="hero">
          <img src="/images/main.jpg" alt="job hunt" className="main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
