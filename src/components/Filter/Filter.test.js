import React from "react";
import { shallow } from "enzyme";

import Filter from "./Filter";

describe("<Filter />", () => {
  let wrapper;
  let handleChangeMock;
  let handleSubmitMock;

  beforeEach(() => {
    const defaultProps = {
      options: [{ id: 1, name: "pro1" }, { id: 2, name: "pro2" }],
      values: { category_id: 0 }
    };

    handleChangeMock = jest.fn();
    handleSubmitMock = jest.fn();
    wrapper = shallow(
      <Filter
        {...defaultProps}
        handleChange={handleChangeMock}
        handleSubmit={handleSubmitMock}
      />
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("clicking submit button", () => {
    const buttonElement = wrapper.find("button");

    buttonElement.simulate("click");
    expect(handleSubmitMock).toBeTruthy();
  });
});
