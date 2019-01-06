import React, { Component } from "react";
import PropTypes from "prop-types";

import Rating from "../UI/Rating/Rating";

class ProList extends Component {
  render() {
    const { pros } = this.props;
    const headers = ["Id", "Name", "Postcode", "Review Rating"];

    const renderHeader = headers.map(header => {
      return (
        <>
          <span className="pro-list-table-header">
            <strong>{header} </strong>
          </span>
        </>
      );
    });

    const renderTable = pros.map(pro => {
      return (
        <>
          <span key={pro.id}>{pro.id}</span>
          <span>{pro.name}</span>
          <span>{pro.main_address.postcode}</span>
          <span>
            <Rating rating={pro.review_rating} />
          </span>
        </>
      );
    });

    return (
      <>
        <div
          className={
            pros.length > 0 ? "pros-list-table" : "pros-list-table-noresult"
          }
        >
          {pros.length > 0
            ? renderHeader
            : "No results Search for Pros in your area"}
          {renderTable}
        </div>
      </>
    );
  }
}
ProList.propTypes = {
  pros: PropTypes.array
};

export default ProList;
