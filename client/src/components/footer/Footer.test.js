import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders correctly", () => {
    render(<Footer />);

    expect(screen.getByAltText("n")).toBeInTheDocument();
    expect(screen.getByText("Contact us")).toBeInTheDocument();
  });

  it("length socials", () => {
    render(<Footer />);
    const divElements = screen.getAllByTestId(/^my-div-\d+$/);
    expect(divElements.length).toBe(5);
  });
});
