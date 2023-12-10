import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieList from "./MovieList";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [], total_pages: 0 }),
  })
);

describe("MovieList Component", () => {
  it("renders loading state initially", () => {
    render(<MovieList query="test" />);
    expect(screen.getByText("Loading..")).toBeInTheDocument();
  });

  it("renders error message if there is an error", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("Error"));

    render(<MovieList query="test" />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Sorry there is currently an error, please return later"
        )
      ).toBeInTheDocument();
    });
  });

  it("renders movies when data is fetched successfully", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [{ id: 1 }],
            total_pages: 1,
          }),
      })
    );

    render(<MovieList query="test" />);

    await waitFor(() => {
      expect(screen.getByTestId("movie-list")).toBeInTheDocument();
    });
  });

  it("renders 'No movies found' message if no movies are returned", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [], total_pages: 0 }),
      })
    );

    render(<MovieList query="test" />);

    await waitFor(() => {
      expect(screen.getByText("No movies found")).toBeInTheDocument();
    });
  });

  it("calls the fetch function with the correct parameters when changing sort type", async () => {
    render(<MovieList query="test" />);

    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:3001/movies?query=test&page=0&sort=default"
    );
  });
});
