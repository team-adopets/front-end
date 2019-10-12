import axios from "axios";
import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "./ActionTypes";

export const getProducts = () => async dispatch => {
    let products = await axios.get(`http://localhost:3000/api/products/`)
    if (!products) {
       return
    } else {
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
    }
};

export const getProduct = id => async dispatch => {
  let product = await axios.get(`http://localhost:3000/api/products/${id}`);
  if (!product) {
    return 
  } else {
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: product
    })
  }
};

