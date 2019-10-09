import { cartTypes } from "./types/_cartTypes";

export const addToCart = id => {
  return {
    type: cartTypes.ADD_TO_CART,
    id
  };
};
