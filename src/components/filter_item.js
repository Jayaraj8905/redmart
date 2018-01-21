import React, { Component } from "react";

class FilterItem extends Component {

	onCheckboxClick() {
		// call the select or deselect based on the checkbox selection
		if (this.refs.checkbox.checked) {
			this.props.onSelect();	
		} else {
			this.props.onDeSelect();
		}
		
	}
  	render() {
	    const { filter, onSelect } = this.props;
	    return (
	    	<div className="text layout-row layout-align-start-center">
	            <input type="checkbox" 
	            ref={'checkbox'}
	            onClick={() => this.onCheckboxClick()} />
	            {filter.value}
	        </div>
	  	);
  	}
}

export default FilterItem;
