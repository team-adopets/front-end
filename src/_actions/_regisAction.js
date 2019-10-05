import { history } from "../_helper/_historyHelper";
import { userTypes } from "./types/_userTypes";
import { userHelper } from "../_helper/_userHelper";

/* action creator */
export const signup = data => {
  return async dispatch => {
    // dispatch(request(data));
    userHelper.register(data).then(
      data => {
        dispatch(success(data));
        history.push("/signin");
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
  
  function success(data) {
    return { type: userTypes.USER_SIGNUP, data };
  }

  function failure(error) {
    return { type: userTypes.USER_SIGNUP_FAIL, error };
  }
};

export const signin = (username, password) => {
  return dispatch => {
    userHelper.login(username, password)
        .then(
            user => { 
                dispatch(success(user));
                history.push('/home');
            },
            error => {
                dispatch(failure(error.toString()));
            }
        );
  };


  function success(data) {
    return { type: userTypes.USER_SIGNIN, data };
  }

  function failure(error) {
    return { type: userTypes.USER_SIGNIN_FAIL, payload:error };
  }
};

export const logout = () => {
  userHelper.logout();
  return { type: userTypes.USER_SIGNOUT };
}
