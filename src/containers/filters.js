import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFilters } from "../actions";

import FilterItem from "./../components/filter_item";

class Filter extends Component {

  constructor() {
    super();
    this.state = {
      filters: []
    }
  }

  onSelect(filterUnit) {
    // if the filter is selected push the filter to the state filter
    const newFilters = {...this.state.filters};
    if (!newFilters[filterUnit.name]) {
      newFilters[filterUnit.name] = [];
    }

    newFilters[filterUnit.name].push(filterUnit.value);
    this.setState({
      filters: newFilters
    })
    this.props.onFilter(newFilters);
  }

  onDeSelect(filterUnit) {
    // if the filter is unselected remove the filter from the state filter
    const newFilters = {...this.state.filters};
    
    if (newFilters[filterUnit.name]) {
      newFilters[filterUnit.name].splice(newFilters[filterUnit.name].indexOf(filterUnit.value),1);
    }

    this.setState({
      filters: newFilters
    })
    this.props.onFilter(newFilters);
  }

  componentDidMount() {
    this.props.fetchFilters();
  }

  render() {
    const { filters } = this.props;
    const renderedFilter = filters.map((filter, key) => {
      const brand = <p className="title">{filter.name}</p>;
      const list = filter.values.map((value, key) => {
        const filterUnit = {
          name: filter.name,
          value: value
        }
        return (
          <FilterItem key={key} 
            filter={filterUnit}
            onSelect={() => this.onSelect(filterUnit)}
            onDeSelect={() => this.onDeSelect(filterUnit)}
            /> 
        )
      })
      return (
        <div key={key}>
          <div className="type">
            {brand}
            {list}
          </div>
        </div>
      )
    })
    return (
      <div className="filter-container flex">
        {renderedFilter}
      </div>
    );
  }
}

function mapStateToProps({ filters }) {
  return { filters };
}

export default connect(mapStateToProps, { fetchFilters })(Filter);

