import React, { Component } from "react";

class ProductItem extends Component {

	addToCart(event) {
		// prevent propogatio to avoid the detail page navigation
		event.stopPropagation()
		this.props.addToCart(this.props.product);
	}

	renderAddToCart() {
		return !this.props.isCart ? (
				<a className="btn btn-primary" onClick={(event) => this.addToCart(event)}>Add To Cart</a>	
			) : '';
	}

  	render() {
	    const { product, onSelect } = this.props;
	    const addToCart = this.renderAddToCart();
	    const image = `/assets/images/${product.image}`;
	    return (
	    	<div onClick={() => onSelect(product)} className="product-item layout-align-start-center flex layout-column">
	    		<img src={image} />
	    		<p>{product.name}</p>
	    		<p>{product.measurement}</p>
	    		<p className="bold">${product.price}</p>
	      		{addToCart}
	    	</div>
	  	);
  	}
}

export default ProductItem;
