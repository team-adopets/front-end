import { userTypes, authTypes } from "../actions/types/user__types";

import { userHelper } from "../helper/user__helper";

const { login, logout, register } = userHelper;

/* action creator */
export const signup = data => {
  return (dispatch) => {
    
    /*
      => then dispatch an action that return object of type and data if there any data you wanna pass
      => user try and catch
    */
  }
};

export const signin = () => {

}

/* AUTH_SIGN_UP, AUTH_ERROR */
