import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Sort from "./Sort";

describe("Sort component", () => {
  it("renders the sort buttons", () => {
    render(<Sort />);

    expect(screen.getByText("Sort By:")).toBeInTheDocument();
    expect(screen.getByAltText("rating")).toBeInTheDocument();
    expect(screen.getByText("1998")).toBeInTheDocument();
    expect(screen.getByText("Ab")).toBeInTheDocument();
  });

  it('applies "chosen" class to the selected sort button', () => {
    render(<Sort sortType="rating" />);

    expect(screen.getByTitle("rating")).toHaveClass("chosen");
  });

  it("calls onSort function when a sort button is clicked", () => {
    const mockOnSort = jest.fn();
    render(<Sort onSort={mockOnSort} />);

    fireEvent.click(screen.getByTitle("rating"));
    expect(mockOnSort).toHaveBeenCalledWith("rating");
  });
});
