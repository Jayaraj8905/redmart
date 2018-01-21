import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct, addCart, removeCart } from "../actions";

class Detail extends Component {

  componentDidMount() {
    this.props.fetchProduct();
  }

  addToCart(product) {
    this.props.addCart(this.props.product);
  }

  removeFromCart(product) {
    this.props.removeCart(this.props.product); 
  }

  renderAddToCart() {
    return !this.props.isCart ? (
        <a className="btn btn-primary" onClick={(event) => this.addToCart(event)}>Add To Cart</a>  
      ) : <a className="btn btn-primary" onClick={(event) => this.removeFromCart(event)}>Remove From Cart</a>;
  }

  render() {
    const { product } = this.props;
    if (!product) {
      return (
        <div>Loading...</div>
      )
    }

    const addToCart = this.renderAddToCart();
    const image = `/assets/images/${product.image}`;

    return (  
      <div className="page detail flex">
        <h3>{product.name}</h3>
        <div className="layout-row">
          <div className="flex-33 layout-align-center-center layout-row">
            <img src={image} />
          </div>
          <div className="flex">
            <h4>{product.measurement}</h4>
            <h5>${product.price}</h5>
            <p className="desc">{product.desc}</p>
            {addToCart}
          </div>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps({ products, cart }, ownProps) {
  const product = products.find(product => product.id === parseInt(ownProps.match.params.id));
  const isCart = product && cart.indexOf(product.id) != -1;
  return { product, isCart };
}

export default connect(mapStateToProps, { fetchProduct, addCart, removeCart })(Detail);