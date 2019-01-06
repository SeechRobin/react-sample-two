import React, { Component } from "react";

import Filter from "../components/Filter/Filter";
import ProsList from "../components/ProList/ProList";

import { PAGINATION } from "../constants/constants";

import api from "../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category_id: "",
      location: "",
      prosList: []
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

        this.setState({
          prosList: pros,
          isLoading: false
        });
        console.log(this.state.prosList);
      });
  }

  render() {
    const { category_id, location, prosList } = this.state;
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
      </div>
    );
  }
}

export default Dashboard;
