import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, addCart, removeCart } from "../actions";

import ProductItem from "./../components/product_item";
import Filter from "./filters";

class Browse extends Component {

  constructor() {
    super();
    this.state = {
      filters: {},
      filterState: {}
    }
  }

  componentDidMount() {
    // trigger the action
    this.props.fetchProducts();
  }

  productDetail(selectedProduct) {
    // go to the detail page
    this.props.history.push(`/detail/${selectedProduct.id}`);
  }

  addToCart(product) {
    this.props.addCart(product);
  }

  removeFromCart(product) {
    this.props.removeCart(product); 
  }

  onFilter(filters) {
    this.setState({
      filters: {...filters}
    })
  }

  isInFilter(product) {
    const { filters, filterState } = this.state;
    // if the brand filter is empty return true
    // else check the product brand is exists in the filter
    let inBrand = !filters['brand'] || filters['brand'].length === 0 || filters['brand'].indexOf(product.brand) != -1;

    // if the price filter is empty return true
    // else check the price brand is exists in the filter
    let inPrice = !filters['price'] || filters['price'].length === 0;
    if (filters['price'] && filters['price'].length) {
      inPrice = filters['price'].find(range => {
        // destructure the min and max form the range
        const [min, max] = range.split('-');
        // if the price fall in the range return true
        return parseInt(product.price) >= parseInt(min) 
                && parseInt(product.price) <= parseInt(max);
      })      
    }

    // if the product is in the brand and price return true
    return inBrand && inPrice;
  }

  render() {
    const { products,cart, filterState } = this.props;
    const active = filterState.state;
    // get the product items from the list
    const productItems = products.map((product, key) => {
      const isCart = cart.indexOf(product.id) != -1;
      
      // also check it is in the filter
      if (this.isInFilter(product)) {
        return (
          <div className="flex-33 layout-row" key={key}>
            <ProductItem product={product}
              onSelect={product => this.productDetail(product)}
              addToCart={product => this.addToCart(product)}
              removeFromCart={product => this.removeFromCart(product)}
              isCart={isCart}
            />
          </div>
        )  
      } 
    });
    
    return (  
      <div className="layout-row">
        <div className={`filter layout-row ${active ? "" : "hide flex-20"}`}>
          <Filter onFilter={filters => this.onFilter(filters)}/>
        </div>
        <div className="page-wrapper flex">
          <div className="layout-row layout-wrap flex page">
              {productItems}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products, cart, filterState }) {
  return { products, cart, filterState };
}

export default connect(mapStateToProps, { fetchProducts, addCart, removeCart })(Browse);

