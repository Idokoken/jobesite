import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { tablet } from "../Responsive";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../components/Index";
import { useAppContext } from "../context/AppContext";

//css section
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  background: rgb(198, 208, 206);

  .main {
    background: white;
    width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    ${tablet({ width: "60%" })}
  }
  .heading {
    display: flex;
    margin: 30px 0;
    font-family: "Rampart One", cursive;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  h2 {
    color: rgba(211, 15, 69, 1);
    font-weight: 600;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
  }
  label {
    margin-top: 15px;
  }
  label:nth-child(1) {
    margin-top: 0;
  }
  input {
    margin-bottom: 10px;
  }
  .btn {
    font-weight: 400;
    background: rgba(211, 15, 69, 1);
    color: white;
    padding: 5px;
    margin-top: 30px;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 0;
  }
  .link {
    text-decoration: none;
    color: blue;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    margin-right: 5px;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    isMember: true,
    showAlert: false,
  };
  const [values, setValues] = useState(initialValues);
  const { user, showAlert, displayAlert, loginUser } = useAppContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      //	alert
      displayAlert();
      return;
    }

    const currentUser = { email, password };

    loginUser(currentUser);
  };

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <div className="main">
        <div className="heading">
          <img src="/images/logo.png" alt="brand" />
          <h4>World jobs</h4>
        </div>
        <h2>Login</h2>
        {showAlert && <Alert />}
        <form onSubmit={handleSubmit}>
          <label className="form-label">Email</label>
          <input
            type="email"
            value={values.email}
            name="email"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            value={values.password}
            name="password"
            className="form-control"
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
