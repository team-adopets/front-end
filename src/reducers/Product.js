import {GET_PRODUCTS, GET_SINGLE_PRODUCT} from "../Actions/ActionTypes"


const productReducer = (state={}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products : action.payload
            }
        case GET_SINGLE_PRODUCT:
            return{
                ...state,
                product : action.payload
            }
        default:
            return state;
    }
}

export default productReducer