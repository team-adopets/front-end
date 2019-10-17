import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  // CHECKOUT_LOADING,
  // CHECKOUT_FAIL,
  // CHECKOUT_SUCCESS
} from "../actions/ActionTypes";

const initialState = {
  products: [],
  product: [],
  isLoading: true,
  checkoutItems: [],
  total: 0
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case GET_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: action.payload
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };

    case ADD_TO_CART:
      let productToAdd = state.products.find(
        product => product._id === action.payload
      );

      return {
        ...state,
        checkoutItems: [...state.checkoutItems, productToAdd]
      };

    case REMOVE_ITEM: {
      let newItem = state.checkoutItems.filter(
        item => item._id !== action.payload
      );
      return {
        ...state,
        checkoutItems: newItem
      };
    };
    
    default:
      return state;
  }
};

export default productReducer;
