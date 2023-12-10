import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  it("renders the current page and total pages", () => {
    render(
      <Pagination
        page={2}
        totalPages={10}
        onPrev={() => {}}
        onNext={() => {}}
      />
    );

    const pageInfo = screen.getByText("3 / 10");
    expect(pageInfo).toBeInTheDocument();
  });

  it('disables the "Previous" button on the first page', () => {
    render(
      <Pagination
        page={0}
        totalPages={10}
        onPrev={() => {}}
        onNext={() => {}}
      />
    );

    const prevButton = screen.getByText("‹");
    expect(prevButton).toHaveAttribute("disabled");
  });

  it('disables the "Next" button on the last page', () => {
    render(
      <Pagination
        page={9}
        totalPages={10}
        onPrev={() => {}}
        onNext={() => {}}
      />
    );

    const nextButton = screen.getByText("›");
    expect(nextButton).toHaveAttribute("disabled");
  });

  it('calls the onNext function when the "Next" button is clicked', () => {
    const onNextMock = jest.fn();
    render(
      <Pagination
        page={2}
        totalPages={10}
        onPrev={() => {}}
        onNext={onNextMock}
      />
    );

    const nextButton = screen.getByText("›");
    fireEvent.click(nextButton);

    expect(onNextMock).toHaveBeenCalledTimes(1);
  });

  it('calls the onPrev function when the "Previous" button is clicked', () => {
    const onPrevMock = jest.fn();
    render(
      <Pagination
        page={2}
        totalPages={10}
        onPrev={onPrevMock}
        onNext={() => {}}
      />
    );

    const prevButton = screen.getByText("‹");
    fireEvent.click(prevButton);

    expect(onPrevMock).toHaveBeenCalledTimes(1);
  });
});
