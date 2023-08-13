import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Alert } from "../components/Index";
import styled from "styled-components";
import { tablet } from "../Responsive";

const Wrapper = styled.div`
  background-color: rgba(205, 232, 238, 0.7);
  margin: 0;
  padding: 30px;
  min-height: 70vh;

  form {
    background-color: white;
    padding: 30px;
  }

  .form {
    display: grid;
    grid-template-columns: 100%;
    gap: 15px;
    ${tablet({ gridTemplateColumns: "30% 30% 30%" })}
  }

  .btn {
    font-weight: 400;
    background: rgba(211, 15, 69, 1);
    color: white;
    padding: 5px;
    width: 100%;
    align-self: center;
    ${tablet({ marginTop: "34px" })}
  }
  label {
    margin-bottom: 10px;
  }
`;

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
    // console.log({ name, email, lastName, location });
    // updateUser()
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h3 className="my-2">Profile</h3>
        {showAlert && <Alert />}
        <div className="form">
          <div className="my-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label>LastName</label>
            <input
              type="text"
              name="lastName"
              placeholder="last name"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="my-2">
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="my-2">
            <input
              className="btn submit"
              type="submit"
              value={isLoading ? "Please wait..." : "Save Changes"}
              disabled={isLoading}
            />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
