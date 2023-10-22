import { ActionTypes } from "../constants/action-types";

export const addToCart = (products) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products,
  };
};

export const deleteFromCart = (product) => {
    return {
      type: ActionTypes.DELETE_FROM_CART,
      payload: product,
    };
  };
  export const checkOut = () => {
    return {
      type: ActionTypes.CHECK_OUT,
      
    };
  };



