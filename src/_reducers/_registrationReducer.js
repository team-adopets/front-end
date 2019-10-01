import {userTypes} from "../_actions/types/_userTypes"

const initialState = {
    data: {},
    isSignUp: false
}

export const registrationReducer = (state=initialState, action) => {
    switch (action.type) {
        case userTypes.USER_SIGNUP :
            return {
                ...state,
                name : action.payload,
                email: action.payload,
                password: action.payload,
                imgUrl: action.payload
            }  
        
        case userTypes.USER_SIGNUP_SUCCESS:
            return {
                isSignUp : true
            }
        default:
            return state;
    }
}

