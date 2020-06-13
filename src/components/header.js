import React, { Component } from 'react';
import { NavLink, BrowserRouter } from "react-router-dom";
import { toggleFilter } from "./../actions";
import { connect } from "react-redux";

class Header extends Component {
  
  constructor() {
    super();
    this.state = {
      filterState: {}
    }
  }

  toggle() {
    this.props.toggleFilter(!this.props.filterState.state);
  }

  render() {
    const { filterState } = this.props;
    const active = filterState.state;
    return (
      <header>
        <div className="layout-row layout-align-space-between-center">
          <div className={`menu ${active ? "open" : ""}`}>
            <button className={`c-hamburger c-hamburger--htx ${active ? "is-active" : ""}`} onClick={() => this.toggle()}><span>toggle menu</span></button>
          </div>
          <div className="layout-row layout-align-end-center flex">
              <NavLink to="/browse" className="btn btn-primary">Browse</NavLink>
              <NavLink to="/cart" className="btn btn-primary">Cart</NavLink>
          </div>
        </div>
      </header>
    );
  }
}


function mapStateToProps({ products, cart, filterState }) {
  return { products, cart, filterState };
}

export default connect(mapStateToProps, { toggleFilter })(Header);
