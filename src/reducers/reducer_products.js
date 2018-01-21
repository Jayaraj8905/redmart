import { FETCH_PRODUCTS, FETCH_PRODUCT, ADD_CART } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case FETCH_PRODUCT:
      return action.payload;
    case ADD_CART:
      return [...state];
    default:
      return state;
  }
}
