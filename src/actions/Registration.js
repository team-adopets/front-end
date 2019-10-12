import axios from "axios";
import { GET_ERRORS, USER_LOGIN } from "./ActionTypes";
import setAuthToken from "../Helpers/SetAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("http://localhost:8888/api/users/register", user)
    .then(history.push("/signin"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const loginUser = (user, history) => dispatch => {
  axios
    .post("http://localhost:8888/api/users/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setLogin(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const setLogin = decoded => {
  return {
    type: USER_LOGIN,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setLogin({}));
  history.push("/");
};