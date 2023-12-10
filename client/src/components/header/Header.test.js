import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header with logo", () => {
  render(<Header />);

  const headerElement = screen.getByRole("img");
  expect(headerElement).toBeInTheDocument();

  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();
});
