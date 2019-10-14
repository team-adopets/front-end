import {ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from "./ActionTypes"

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}


// import axios from 'axios';

// //ADD TO CART
// export function addToCart(cart){
//   return function(dispatch){
//     axios.post('/api/cart', cart)
//     .then(function(response){
//       return dispatch({ type:'ADD_TO_CART', payload: response.data });
//     })
//     .catch(function(err){
//       return dispatch({ type:'ADD_TO_CART_REJECTED', payload: err });
//     });
//   }
// }

// //GET CART
// export function getCart(){
//   return function(dispatch){
//     axios.get('/api/cart')
//     .then(function(response){
//       return dispatch({ type:'GET_CART', payload: response.data });
//     })
//     .catch(function(err){
//       return dispatch({ type:'GET_CART_REJECTED', payload: err });
//     });
//   }
// }

// //UPDATE CART
// export function updateCart(_id, unit, cart){
//   const updateIndex = cart.findIndex(function(cartItem){
//     return cartItem._id === _id;
//   });
//   const newCart = {
//     ...cart[updateIndex],
//     quantity: cart[updateIndex].quantity + unit,
//   };
//   let cartUpdate = [...cart.slice(0, updateIndex), newCart, ...cart.slice(updateIndex + 1)];

//   return function(dispatch){
//     axios.post('/api/cart', cartUpdate)
//     .then(function(response){
//       return dispatch({ type:'UPDATE_CART', payload: response.data });
//     })
//     .catch(function(err){
//       return dispatch({ type:'UPDATE_CART_REJECTED', payload: err });
//     });
//   }
// }

// //DELETE FROM CART
// export function deleteCartItem(cart){
//   return function(dispatch){
//     axios.post('/api/cart', cart)
//     .then(function(response){
//       return dispatch({ type:'DELETE_CART_ITEM', payload: response.data });
//     })
//     .catch(function(err){
//       return dispatch({ type:'DELETE_CART_ITEM_REJECTED', payload: err });
//     });
//   }
// }