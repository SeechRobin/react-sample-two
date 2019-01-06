import React, { Component } from "react";

import Filter from "../components/Filter/Filter";

import { PAGINATION } from "../constants/constants";

import api from "../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category_id: "",
      location: ""
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
    }
  };

  render() {
    const { category_id, location } = this.state;
    const values = { category_id, location };
    return (
      <div className="container">
        <Filter
          categories={this.state.categories}
          values={values}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Dashboard;
