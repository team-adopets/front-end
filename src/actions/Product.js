import axios from "axios";
import {
  AlertAddToCart, AlertCheckout
} from "../helper/Alert";

import {
  GET_PRODUCTS,
  GET_ERRORS,
  GET_PRODUCT,
  ADD_TO_CART,
  REMOVE_ITEM,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  CHECKOUT_SUCCESS,
  CHECKOUT_LOADING,
  CHECKOUT_FAIL,
  CHECKOUT_CLEAR
} from "./ActionTypes";

export const getProducts = () => async dispatch => {
  try {
    let products = await axios.get(
      `https://database-project-adopets.herokuapp.com/api/product`
    );
    dispatch({
      type: GET_PRODUCTS_LOADING,
      payload: true
    });
    if (products.status === 200) {
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data.result
      });
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: false
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
  }
};

export const getProduct = (id, history) => async dispatch => {
  try {
    let product = await axios.get(
      `https://database-project-adopets.herokuapp.com/api/product/${id}`
    );
    if (product.status === 200) {
      dispatch({
        type: GET_PRODUCT,
        payload: product.data.result
      });
      history.push("/productdesc");
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
  }
};

export const addProductToCart = (id, history) => dispatch => {
  try {
    dispatch({
      type: ADD_TO_CART,
      payload: id
    });
    AlertAddToCart();
    history.push("/product");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
  }
};

export const removeProductCart = (id, history) => dispatch => {
  try {
    dispatch({
      type: REMOVE_ITEM,
      payload: id
    });
   
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  }
};

export const checkOut = (data, history) => dispatch => {
  try {
    let dataToSend = axios.post(
      `https://database-project-adopets.herokuapp.com/api/checkout`,
      data
    ).then(data => {
      if (data.status === 200) {
        dispatch({
          type: CHECKOUT_SUCCESS,
          payload: false
        });
        AlertCheckout()
        history.push("/product");
        // dispatch({ type: CHECKOUT_CLEAR, payload: []})
      }
    })
    // dispatch({
    //   type: CHECKOUT_LOADING,
    //   payload: true
    // });
    console.log(dataToSend, "data to send");
    
    
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
    dispatch({
      type: CHECKOUT_FAIL,
      payload: false
    });
  }
};