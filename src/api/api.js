import axios from "axios";

import { API_URL, PAGINATION } from "../constants/constants";

export default class api {
  getlistOfCategories = async () => {
    try {
      return await axios.get(`${API_URL.categories}`);
    } catch (error) {
      console.error(error);
    }
  };

  getlistOfPros = async (category_id, location, pageOffset) => {
    console.log(category_id, location, pageOffset);

    const headers = {
      "x-pagination-limit": PAGINATION.x_pagination_limit,
      "X-pagination-offset": pageOffset
    };

    const data = {
      category_id: category_id,
      location: location
    };

    try {
      return await axios.post(`${API_URL.pros}`, data, { headers: headers });
    } catch (error) {
      console.error(error);
    }
  };
}
