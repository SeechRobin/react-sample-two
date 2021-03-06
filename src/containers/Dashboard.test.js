import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
