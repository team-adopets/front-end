import { userTypes } from "../_actions/types/_userTypes";

export const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.USER_SIGNUP:
      return {
        ...state,
        username: action.data.username,
        email: action.data.email,
        password: action.data.password,
      };

    case userTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUp: true
      };

    case userTypes.USER_SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
