import React, { Component } from "react";

import Filter from "../components/Filter/Filter";
import ProsList from "../components/ProList/ProList";
import Pagination from "../components/Pagination/Pagination";

import { PAGINATION } from "../constants/constants";

import api from "../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category_id: "",
      location: "",
      prosList: [],
      paginationCount: 0,
      currentPage: 1,
      isLoading: false
    };
    this.api = new api();
  }

  componentDidMount() {
    this.api.getlistOfCategories().then(response => {
      const activeCategories = response.data.filter(
        category => !category.hidden
      );
      this.setState({ categories: activeCategories });
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ currentPage: 1 });
    const { category_id, location } = this.state;
    if (location && category_id) {
      this.fetchPros(category_id, location, PAGINATION.x_pagination_offset);
    }
  };

  fetchPros(category_id, location, pageOffset) {
    this.setState({
      isLoading: true
    });
    this.api
      .getlistOfPros(category_id, location.toLowerCase(), pageOffset)
      .then(response => {
        const pros = response.data.response.pros;
        const pages = Math.ceil(
          Number(response.headers["x-pagination-count"]) /
            PAGINATION.x_pagination_limit
        );

        this.setState({
          prosList: pros,
          paginationCount: pages,
          isLoading: false
        });
        console.log(this.state.prosList);
      });
  }

  handlePageChange = e => {
    const pageOffset =
      e.target.attributes["offsetkey"].value * PAGINATION.x_pagination_limit;

    const { category_id, location } = this.state;
    this.fetchPros(category_id, location, pageOffset);
    this.setState({
      currentPage: Number(e.target.id)
    });
  };

  handleNextPageClick = () => {
    const { category_id, location, currentPage, paginationCount } = this.state;

    if (currentPage < paginationCount) {
      const newPage = currentPage + 1;
      this.setState({ currentPage: newPage });
      const pageOffset = (newPage - 1) * PAGINATION.x_pagination_limit;
      this.fetchPros(category_id, location, pageOffset);
    }
  };
  handlePrevPageClick = () => {
    const { category_id, location, currentPage } = this.state;

    if (currentPage > 1) {
      const newPage = currentPage - 1;
      this.setState({ currentPage: newPage });
      const pageOffset = (newPage - 1) * PAGINATION.x_pagination_limit;
      this.fetchPros(category_id, location, pageOffset);
    }
  };

  render() {
    const { category_id, location, prosList, currentPage } = this.state;
    const values = { category_id, location };
    return (
      <div className="container">
        <Filter
          categories={this.state.categories}
          values={values}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ProsList pros={prosList} />
        <Pagination
          handlePageChange={this.handlePageChange}
          paginationCount={this.state.paginationCount}
          currentPage={currentPage}
          nextPage={this.handleNextPageClick}
          prevPage={this.handlePrevPageClick}
        />
      </div>
    );
  }
}

export default Dashboard;
