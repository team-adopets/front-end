import axios from "axios";
import { GET_PRODUCTS, GET_ERRORS, GET_PRODUCT, ADD_TO_CART, REMOVE_ITEM } from "./ActionTypes";

export const getProducts = () => async dispatch => {
    try {
      let products = await axios.get(`https://database-project-adopets.herokuapp.com/api/product`)
      
      if (products.status === 200) {
          dispatch({ type: GET_PRODUCTS, payload: products.data.result})
      }
    } catch (error) {
      dispatch({ type: GET_ERRORS, payload: error})
    }
};

export const getProduct = (id, history) => async dispatch => {
  try {
    let product = await axios.get(`https://database-project-adopets.herokuapp.com/api/product/${id}`);     
    if (product.status === 200) {
        dispatch({ type: GET_PRODUCT, payload: product.data.result})
        history.push("/productdesc")
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error})
  }
};

export const addProductToCart = (id, history) => dispatch => {  
   try {
     dispatch({ type: ADD_TO_CART, payload:id})
     history.push("/cart")
   } catch (error) {
     dispatch({ type: GET_ERRORS, payload: error})
   }
}

export const removeProductCart = (id, history) => dispatch => {
  try { 
    dispatch({ type: REMOVE_ITEM, payload: id})
    alert("Success remove item")
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error})
  }
}

