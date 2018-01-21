export const FETCH_PRODUCTS = "fetch_products";
export const FETCH_PRODUCT = "fetch_product";
export const FETCH_FILTERS = "fetch_filters";
export const FETCH_CART = "fetch_cart";
export const ADD_CART = "add_cart";

import DATA from "./../data.js";

// add the id for the data provided
DATA.products.forEach(function(element, index) {
    element.id = index + 1;
});

export function fetchProducts() {
	return {
    	type: FETCH_PRODUCTS,
    	payload: DATA.products
  	};
}

export function fetchProduct(id) {
	return {
    	type: FETCH_PRODUCT,
    	payload: DATA.products
  	};
}

export function fetchFilters() {
	return {
    	type: FETCH_FILTERS,
    	payload: DATA.filters
  	};
}

export function fetchCart() {
	return {
    	type: FETCH_CART
  	};
}

export function addCart(product) {
  return {
      type: ADD_CART,
      payload: product.id
    };
}