import axios from "axios";
import {
  GET_ERRORS,
  USER_LOGIN,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_FAIL
} from "./ActionTypes";
import setAuthToken from "../helper/SetAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => async dispatch => {
  dispatch({ type: USER_REGISTER_LOADING, payload: true });
  axios
    .post(
      "https://database-project-adopets.herokuapp.com/api/users/register",
      user
    )
    .then(result => {
      if (result.status === 200) {
        history.push("/signin");
        dispatch({ type: USER_REGISTER_SUCCESS, payload: false });
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({ type: USER_REGISTER_FAIL, payload: false });

    });
};

export const loginUser = user => async dispatch => {
  dispatch({ type: USER_LOGIN_LOADING, payload: true });

  axios
    .post("https://database-project-adopets.herokuapp.com/api/users/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setLogin(decoded));
      dispatch({ type: USER_LOGIN_SUCCESS, payload: false})
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({ type: USER_LOGIN_FAIL, payload: false})

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
