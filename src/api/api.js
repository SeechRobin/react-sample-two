import axios from "axios";

import { API_URL } from "../constants/constants";

export default class api {
  getlistOfCategories = async () => {
    try {
      return await axios.get(`${API_URL.categories}`);
    } catch (error) {
      console.error(error);
    }
  };
}
