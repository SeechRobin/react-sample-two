import React from "react";
import PropTypes from "prop-types";

import DropdownInput from "../UI/DropdownInput/DropdownInput";

const filter = ({ categories, values, handleChange, handleSubmit }) => (
  <div className="filter-wrapper">
    <form>
      <p className="input-category-wrapper">
        <label>Category</label>
        <DropdownInput
          options={categories}
          values={values}
          onChange={handleChange}
        />
      </p>
      <p className="input-location-wrapper">
        <label>Postcode</label>
        <input
          name="location"
          type="text"
          placeholder="Post Code"
          value={values.location}
          onChange={handleChange}
        />
      </p>

      <p className="input-button-wrapper">
        <button className="filter-button" onClick={handleSubmit}>
          Submit
        </button>
      </p>
    </form>
  </div>
);

filter.propTypes = {
  categories: PropTypes.array,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default filter;
