import { ActionTypes } from "../constants/action-types";

const initialState = {
  numberCart: 0,
  carts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_NUMBER_CART:
      return {
        ...state,
      };
    case ActionTypes.ADD_TO_CART:
      //cart is empty no need to check, and directly add the item in the cart with quantity as 1
      //cart is not empty, then now check the item in the cart if same, then increase the quantity by 1
      //cart is not empty, now check item in cart and if not same, add the item with quantity as 1

      if (state.numberCart == 0) {
        let item = {
          ...payload,
          quantity: 1,
        };

        state.carts.push(item);
      } else {
        //if the cart has some products already - scenarios 2 and 3
        let check = false;
        state.carts.map((prod, index) => {
          if (prod._id === payload._id) {
            state.carts[index].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _item = {
            ...payload,
            quantity: 1,
          };
          state.carts.push(_item);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    case ActionTypes.DELETE_FROM_CART:
      //check whether the quantity is more than 1, then reduce 1 quantity
      state.carts.map((item, index) => {
        if (item._id == payload._id) {
          if (item.quantity > 1) {
            state.carts[index].quantity--;
          } else {
            state.carts.splice(index, 1);
          }
        }
      });
      return {
        ...state,
        numberCart: state.numberCart - 1,
      };
      case ActionTypes.CHECK_OUT:
        //for checkout action-cart is cleared
        return {
            ...state,
            carts:[],numberCart:0}
    default:
      return state;
  }
};
