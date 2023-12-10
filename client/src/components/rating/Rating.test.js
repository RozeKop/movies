import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Rating from "./Rating";

describe("Rating component", () => {
  it("renders the rating without fraction", () => {
    render(<Rating rating={8} />);

    expect(screen.getByAltText("star")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
  });

  it("renders the rating with fraction", () => {
    render(<Rating rating={9} showFraction />);

    expect(screen.getByAltText("star")).toBeInTheDocument();
    expect(screen.getByText("9/10")).toBeInTheDocument();
  });

  it("renders no text when rating is not provided", () => {
    render(<Rating />);

    expect(screen.getByAltText("star")).toBeInTheDocument();
  });
});
