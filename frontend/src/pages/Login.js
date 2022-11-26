import React, { useState } from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import { Link } from "react-router-dom";
import { Alert } from "../components/Index";

const Login = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    isMember: true,
    showAlert: false,
  };
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(values.name);
  };

  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: rgb(239, 245, 244);
    //mesh generator- https://csshero.org/mesher
    //background-image: #ff0000;
    background-image: radial-gradient(
        at 40% 20%,
        hsla(28, 100%, 74%, 1) 0,
        transparent 50%
      ),
      radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355, 85%, 93%, 1) 0, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0, transparent 50%),
      radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0, transparent 50%),
      radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0, transparent 50%),
      radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0, transparent 50%);

    .main {
      background: #c6d0ce;
      width: 80%;
      min-height: 400px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      border: 4px solid #528;

      ${tablet({ width: "50%" })}
    }
    .heading,
    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      padding: 0;
      align-self: flex-start;
    }
    .login {
      margin: 20px;
    }
    img {
      width: 30px;
      width: 30px;
      margin-right: 20px;
    }

    h3 {
      font-weight: 600;
      font-size: 32px;
    }
    h4 {
      color: #528;
      font-weight: 600;
      font-size: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 200px;
    }
    input {
      margin-bottom: 10px;
      width: 200px;
      height: 30px;
    }
    .btn {
      font-weight: bold;
      background: #528;
      color: white;
      padding: 0 10px;
      margin: 15px 0;
    }
    .link {
      text-decoration: none;
      color: #528;
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      padding: 0;
      margin-right: 5px;
    }
  `;

  return (
    <Wrapper>
      <div className="main">
        <div className="heading">
          <img src="/images/logo.png" alt="brand" />
          <h3>World jobs</h3>
        </div>
        <h4>Login</h4>
        {values.showAlert && <Alert />}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            value={values.password}
            name="password"
            onChange={handleChange}
          />
          <input className="btn submit" type="submit" value="Submit" />
        </form>
        <div className="login">
          <p>Not yet a member?</p>
          <Link className="link" to="/register">
            Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
