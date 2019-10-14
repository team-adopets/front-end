import axios from "axios";
import { GET_ERRORS, USER_LOGIN } from "./ActionTypes";
import setAuthToken from "../helper/SetAuthToken";
import jwt_decode from "jwt-decode";


export const registerUser = (user, history) => dispatch => {
  axios
    .post("https://database-project-adopets.herokuapp.com/api/users/register", user)
    .then( result => { 
      if (result.status === 200) {
        history.push("/signin")
      }
      }
    )
    .catch(err => {
      console.log(err);
      
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = (user) => dispatch => {
  axios
    .post("https://database-project-adopets.herokuapp.com/api/users/login", user)
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
        payload: err.response.data
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