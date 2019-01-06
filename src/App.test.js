import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow } from "enzyme";

import Header from "./components/UI/Header/Header";
import Dashboard from "./containers/Dashboard";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render Header", () => {
    expect(wrapper.find(Header).exists()).toEqual(true);
  });

  it("should render Dashboard", () => {
    expect(wrapper.find(Dashboard).exists()).toEqual(true);
  });
});
