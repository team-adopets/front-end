import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM
} from "../actions/ActionTypes";

const initialState = {
  products: [],
  product: [],
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
      }
    }
    default:
      return state;
  }
};

export default productReducer;

// case REMOVE_ITEM:
//   let itemToRemove = state.addedItems.find(item => action.id === item.id);
//   let new_items = state.addedItems.filter(item => action.id !== item.id);

//   //calculating the total
//   let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
//   return {
//     ...state,
//     checkoutItems: new_items,
//     total: newTotal
//   };
