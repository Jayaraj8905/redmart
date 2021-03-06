import { FETCH_FILTERS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FILTERS:
      return action.payload;
    default:
      return state;
  }
}