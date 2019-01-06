import React, { Component } from "react";
import PropTypes from "prop-types";

class DropDownInput extends Component {
  render() {
    const { options, values, onChange } = this.props;
    const selectItems = options.map(option => (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    ));

    return (
      <>
        <select
          name="category_id"
          value={values.category_id}
          onChange={onChange}
        >
          <option value="0">Select category:</option>
          {selectItems}
        </select>
      </>
    );
  }
}

export default DropDownInput;

DropDownInput.propTypes = {
  options: PropTypes.array,
  values: PropTypes.object,
  onChange: PropTypes.func
};
