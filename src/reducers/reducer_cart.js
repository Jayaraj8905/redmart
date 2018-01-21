import { FETCH_CART, ADD_CART, REMOVE_CART } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CART:
      	return [...state];
    case ADD_CART:
      	return [...state, action.payload];
    case REMOVE_CART:
    	const result = state.filter(id => id !== action.payload);
    	return result;
    default:
      return state;
  }
}