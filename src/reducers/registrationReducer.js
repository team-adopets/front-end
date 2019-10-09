import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../helper/validation"

const initialState = {
  isAuthenticated: true,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}