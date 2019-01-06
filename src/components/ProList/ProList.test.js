import React from "react";
import { shallow } from "enzyme";

import ProList from "./ProList";

describe("<ProList />", () => {
  let wrapper;

  beforeEach(() => {
    const defaultProps = {
      pros: [
        { id: 1, name: "Pro 1", main_address: "1 Place Ave", review_rating: 4 },
        { id: 2, name: "Pro 2", main_address: "3 Place Ave", review_rating: 5 }
      ]
    };

    wrapper = shallow(<ProList {...defaultProps} />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("clicking submit button", () => {
    wrapper.setProps({ pros: [] });
    expect(wrapper.contains("No results Search for Pros in your area")).toEqual(
      true
    );
  });
});
