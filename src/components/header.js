import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
      	<div className="layout-row layout-align-end-center">
	      	<NavLink to="/browse" className="btn btn-primary" activeClassName="active">Browse</NavLink>
	      	<NavLink to="/cart" className="btn btn-primary" activeClassName="active">Cart</NavLink>
      	</div>
      </header>
    );
  }
}
