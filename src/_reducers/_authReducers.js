
// const INITIAL_STATE = {
//     token:"",
//     isAuthenticated: false,
//     errorMessage: ""
// }
// export const authReducers = (state=INITIAL_STATE, action) => {
//     switch (action.type) {
//         case authTypes.AUTH_SIGN_UP:
//             return { ...state, token: action.payload, isAuthenticated: true, errorMessage:""}
//         case authTypes.AUTH_ERROR:
//             return { ...state, errorMessage: action.payload}
//         default:
//             return state;
//     }
// }