import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Movie from "./Movie";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 123,
        title: "Test Movie",
        image: "test.jpg",
        released: "2022-01-01",
        rating: 4.5,
        synopsis: "Test Synopsis",
        runtime: 120,
      }),
  })
);

describe("Movie Component", () => {
  it("renders an error message when data is not available", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );

    render(<Movie id="123" />);

    await waitFor(() => {
      expect(
        screen.getByText("Oops, something went wrong")
      ).toBeInTheDocument();
    });
  });

  it("renders the movie details when data is available", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            title: "Test Movie",
            image: "test.jpg",
            released: "2022-01-01",
            rating: 4.5,
            synopsis: "Test Synopsis",
            runtime: 120,
          }),
      })
    );

    render(<Movie id="123" />);

    await waitFor(() => {
      expect(screen.getByTestId("movie")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByAltText("Test Movie")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Test Movie (2022-01-01)")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Read more")).toBeInTheDocument();
    });
  });

  it("opens the modal when clicked", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            title: "Test Movie",
            image: "test.jpg",
            released: "2022-01-01",
            rating: 4.5,
            synopsis: "Test Synopsis",
            runtime: 120,
          }),
      })
    );

    render(<Movie id="123" />);

    fireEvent.click(screen.getByTestId("movie"));
    await waitFor(() => {
      expect(screen.getByTestId("modal")).toBeInTheDocument();
    });
  });
});
