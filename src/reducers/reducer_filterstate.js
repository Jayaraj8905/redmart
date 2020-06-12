import { TOGGLE_FILTER } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      	return action.payload;
    default:
      return state;
  }
}