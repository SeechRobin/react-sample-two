import React from "react";
import { shallow } from "enzyme";

import Rating from "./Rating";

describe("<Rating />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Rating rating={3} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
