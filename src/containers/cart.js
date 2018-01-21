import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart } from "../actions";

import ProductItem from "./../components/product_item";

class Cart extends Component {

  productDetail(selectedProduct) {
    this.props.history.push(`/detail/${selectedProduct.id}`);
  }

  addToCart(product) {
  	this.props.addCart();
  }

  render() {
    const { cart,  } = this.props;
    const productItems = cart.map((product) => {
      return (
          <div className="flex-25 layout-row" key={product.id}>
            <ProductItem  
            			product={product} 
            			onSelect={product => this.productDetail(product)}
            			isCart={true}
            			/>
          </div>
        )
    });
    
    return (  
      <div className="page-wrapper flex">
        <div className="layout-row layout-wrap flex page">
          {productItems}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ cart, products }) {
  const cartProducts = cart.map(id => {
    return products.find(product => product.id === id);
  })

  return { cart: cartProducts };
}

export default connect(mapStateToProps, { fetchCart })(Cart);

