import React from "react";
import { shallow } from "enzyme";

import DropDownInput from "./DropdownInput";

describe("<DropDownInput />", () => {
  let wrapper;

  beforeEach(() => {
    const defaultProps = {
      options: [{ id: 1, name: "pro1" }, { id: 2, name: "pro2" }],
      values: { category_id: 0 }
    };

    const onChangeMock = jest.fn();
    wrapper = shallow(
      <DropDownInput {...defaultProps} onChange={onChangeMock} />
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
