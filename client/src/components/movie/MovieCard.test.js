import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "./MovieCard";

const sampleMovie = {
  id: 1,
  title: "Sample Movie",
  runtime: "120 min",
  rating: 8.5,
  synopsis: "<p>This is the movie<b> synopsis.</p>",
  image: "sample-movie.jpg",
  type: "movie",
  imdbid: "tt0062622",
};

test("renders MovieCard with movie details", () => {
  render(<MovieCard movie={sampleMovie} onClose={() => {}} />);

  const titleElement = screen.getByText("Sample Movie");
  expect(titleElement).toBeInTheDocument();

  const runtimeElement = screen.getByText("120 min");
  expect(runtimeElement).toBeInTheDocument();

  const ratingElement = screen.getByText("8.5/10");
  expect(ratingElement).toBeInTheDocument();

  const synopsisElement = screen.getByText("This is the movie synopsis.");
  expect(synopsisElement).toBeInTheDocument();

  const backButtonElement = screen.getByText("Back to list");
  expect(backButtonElement).toBeInTheDocument();

  const typeElement = screen.queryByTestId("type");
  expect(typeElement).toBeNull();
});

test('calls onClose when clicking "Back to list" button', () => {
  const mockOnClose = jest.fn();
  render(<MovieCard movie={sampleMovie} onClose={mockOnClose} />);

  const backButtonElement = screen.getByText("Back to list");
  fireEvent.click(backButtonElement);

  expect(mockOnClose).toHaveBeenCalled();
});
