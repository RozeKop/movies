import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Search from "./Search";

describe("Search Component", () => {
  it("renders the input field with the correct placeholder and value", () => {
    const query = "test";
    render(<Search query={query} onChangeQuery={() => {}} />);

    const inputElement = screen.getByTestId("search");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "search..");
    expect(inputElement).toHaveValue(query);
  });

  it("calls onChangeQuery when the input value changes", () => {
    const onChangeQueryMock = jest.fn();
    render(<Search query="" onChangeQuery={onChangeQueryMock} />);

    const inputElement = screen.getByTestId("search");
    const newQuery = "new test";

    fireEvent.change(inputElement, { target: { value: newQuery } });

    expect(onChangeQueryMock).toHaveBeenCalledWith(newQuery);
  });
});
