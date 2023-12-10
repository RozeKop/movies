import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainBoard from "./MainBoard";

test("renders main board with title, search, and movie list", () => {
  render(<MainBoard />);

  const mainBoardElement = screen.getByTestId("main-board");
  expect(mainBoardElement).toBeInTheDocument();

  const titleElement = screen.getByText(/EXPLORE YOUR NEXT/);
  expect(titleElement).toBeInTheDocument();

  const searchElement = screen.getByTestId("search");
  expect(searchElement).toBeInTheDocument();

  const movieListElement = screen.getByTestId("movie-list");
  expect(movieListElement).toBeInTheDocument();
});

test("updates query state when search input changes", () => {
  const setState = jest.fn();
  jest
    .spyOn(React, "useState")
    .mockImplementationOnce((initState) => [initState, setState]);
  render(<MainBoard />);

  const initialQueryState = screen.getByTestId("search");
  expect(initialQueryState).toHaveTextContent("");

  const searchInput = screen.getByTestId("search");
  fireEvent.change(searchInput, { target: { value: "Harry Potter" } });

  expect(setState).toHaveBeenCalledWith("Harry Potter");
});
