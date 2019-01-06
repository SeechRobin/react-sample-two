import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("<Header />", () => {
  let wrapper;
  const title = "Plentific";

  beforeEach(() => {
    wrapper = shallow(<Header title={title} />);
  });

  it("should render header title", () => {
    expect(wrapper.contains(title)).toEqual(true);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
