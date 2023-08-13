import React, { useReducer, useContext } from "react";
import { Reducer } from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./actions";

export const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  jobLocation: userLocation || "",
  jobTypeOptions: ["Full-Time", "Part-Time", "Contract", "Intenship"],
  jobType: "Full-Time",
  jobSituationOptions: ["Onsite", "Hybrid", "Remote"],
  jobSituation: "Onsite",
  statusOptions: ["Interview", "declined", "pending"],
  status: "pending",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserRemoveLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    //console.log(currentUser);
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const resp = await axios.post("/api/v1/auth/register", currentUser);
      console.log(resp);
      console.log("hello register");
      const { user, token, location } = resp.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.resp.data.msg },
      });
      console.log(error.resp);
    }
    clearAlert();
  };

  //login user
  const loginUser = async (userDetail) => {
    // console.log(userDetail);
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const resp = await axios.post("/api/v1/auth/login", userDetail);
      console.log(resp);
      console.log("hello Login ");
      const { user, token, location } = resp.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.resp.data.msg },
      });
      console.log(error.resp);
    }
    clearAlert();
    window.location = "/";
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserRemoveLocalStorage();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const updateUser = (currentUser) => {
    // try {
    //   const resp = axios.patch("/api/vi/auth/update", currentUser);
    //   console.log(resp.data);
    // } catch (error) {
    //   console.log(error.reponse);
    // }
    // console.log(currentUser);

    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = axios.patch("/api/vi/auth/update", currentUser, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      const { user, location, token } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });
      addUserToLocalStorage({ user, location, token });
      // console.log(data);
    } catch (err) {
      dispatch({ type: UPDATE_USER_ERROR, msg: err.response.data.msg });
      console.log(err.response);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { initialState, AppProvider, useAppContext };
