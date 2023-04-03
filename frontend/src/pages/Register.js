import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
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

const Register = () => {
  //global state and useNavigate
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    isMember: false,
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!name && !isMember)) {
      //	alert
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      console.log("already a member");
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <div className="main">
        <div className="heading">
          <img src="/images/logo.png" alt="brand" />
          <h4>World jobs</h4>
        </div>
        <h2>Register</h2>
        {showAlert && <Alert />}
        <form onSubmit={handleSubmit}>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={values.name}
            onChange={handleChange}
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={values.email}
            onChange={handleChange}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={values.password}
            onChange={handleChange}
          />
          <button className="btn" type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>
        <div className="login">
          <p>Already a member?</p>
          <NavLink className="link" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
