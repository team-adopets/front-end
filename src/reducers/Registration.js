import {
  USER_LOGIN,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_FAIL
} from "../actions/ActionTypes";
import isEmpty from "../helper/validation";

const initialState = {
  isAuthenticated: false,
  isRegis: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    case USER_LOGIN_LOADING:
      return {
        ...state,
        isRegis: action.payload
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isRegis: action.payload
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        isRegis: action.payload
      }
    case USER_REGISTER_LOADING:
      return {
        ...state,
        isRegis: action.payload
      }

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isRegis: action.payload
      }
    
      case USER_REGISTER_FAIL:
        return {
          ...state, 
          isRegis: action.payload
        }
    default:
      return state;
  }
}
