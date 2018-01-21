import { combineReducers } from 'redux';
import ProductsReducer from "./reducer_products";
import FiltersReducer from "./reducer_filters";
import CartReducer from "./reducer_cart";

const rootReducer = combineReducers({
  products: ProductsReducer,
  filters: FiltersReducer,
  cart: CartReducer
});

export default rootReducer;
