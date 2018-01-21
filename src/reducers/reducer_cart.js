import { FETCH_CART, ADD_CART } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CART:
      	return [...state];
    case ADD_CART:
      	return [...state, action.payload];
    default:
      return state;
  }
}