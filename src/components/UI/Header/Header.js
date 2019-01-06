import React from "react";
import PropTypes from "prop-types";

const header = ({ title }) => (
  <div className="header">
    <a href="/" className="logo">
      {title}
    </a>
  </div>
);

header.propTypes = {
  categories: PropTypes.array,
  values: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default header;
