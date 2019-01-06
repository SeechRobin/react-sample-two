import React, { Component } from "react";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    const {
      handlePageChange,
      paginationCount,
      currentPage,
      nextPage,
      prevPage
    } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= paginationCount; i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={currentPage === number ? "active" : ""}
          offsetkey={number - 1}
          key={number}
          id={number}
          onClick={handlePageChange}
        >
          {number}
        </li>
      );
    });

    return (
      <ul id="page-numbers">
        {paginationCount > 0 ? <li onClick={prevPage}>&laquo;</li> : ""}
        {renderPageNumbers}
        {paginationCount > 0 ? <li onClick={nextPage}>&raquo;</li> : ""}
      </ul>
    );
  }
}

export default Pagination;

Pagination.propTypes = {
  handlePageChange: PropTypes.func,
  paginationCount: PropTypes.number,
  currentPage: PropTypes.number,
  nextPage: PropTypes.func,
  prevPage: PropTypes.func
};
