import React from "react";
import { shallow } from "enzyme";

import Pagination from "./Pagination";

describe("<Pagination />", () => {
  let wrapper;
  let handlePageChangeMock;
  let nextPageMock;
  let prevPageMock;

  beforeEach(() => {
    const defaultProps = {
      paginationCount: 0,
      currentPage: 1
    };

    handlePageChangeMock = jest.fn();
    nextPageMock = jest.fn();
    prevPageMock = jest.fn();
    wrapper = shallow(
      <Pagination
        {...defaultProps}
        handlePageChange={handlePageChangeMock}
        nextPage={nextPageMock}
        prevPage={prevPageMock}
      />
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
