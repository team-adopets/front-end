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
      let addedProduct = state.products.find(product => product.id === action.id);
      //check if the action id exists in the addedItems
      let existed_item = state.checkoutItems.find(product => action.id === product.id);
      if (existed_item) {
        return {
          ...state,
          total: state.total + addedProduct.price
        };
      } else {
        //calculating the total
        // let newTotal = state.total + addedProduct.price;
        console.log(addedProduct, "added product");
        
        // return {
        //   ...state,
        //   checkoutItems: [...state.checkoutItems, addedProduct],
        //   total: newTotal
        // };
      }

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
    default:
      return state;
  }
};

export default productReducer;
