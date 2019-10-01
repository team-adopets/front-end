import { userTypes } from "./types";
import { userHelper } from "../helper/";
import { alertActions } from "./alert__action";

function login(name, password) {
  return dispatch => {
    dispatch(request({ name }));

    userHelper.login(name, password).then(
      user => {
        dispatch(success(user));
        // history.push('/');
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userTypes.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userTypes.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userTypes.LOGIN_FAILURE, error };
  }
}

function logout() {
  userHelper.logout();
  return { type: userTypes.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userHelper.register(user).then(
      user => {
        dispatch(success());
        // history.push('/login');
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userTypes.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userTypes.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userTypes.REGISTER_FAILURE, error };
  }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userHelper
      .getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: userTypes.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userTypes.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userTypes.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userHelper
      .delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };

  function request(id) {
    return { type: userTypes.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userTypes.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userTypes.DELETE_FAILURE, id, error };
  }
}

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};
