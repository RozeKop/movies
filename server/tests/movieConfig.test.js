const { pageSize, sortMovies } = require("../movieConfig");

describe("pageSize", () => {
  test("should have a valid pageSize", () => {
    expect(pageSize).toBeGreaterThan(0);
  });
});

describe("sortMovies", () => {
  test("should sort movies by rating in descending order", () => {
    const movies = [
      { title: "A", rating: 4.5, released: 1998 },
      { title: "B", rating: 3.8, released: 2022 },
    ];

    const sortedMovies = sortMovies(movies, "rating");

    expect(sortedMovies[0].title).toBe("A");
    expect(sortedMovies[1].title).toBe("B");
  });

  test("should sort movies by year in descending order", () => {
    const movies = [
      { title: "A", rating: 4.5, released: 1998 },
      { title: "B", rating: 3.8, released: 2022 },
    ];

    const sortedMovies = sortMovies(movies, "year");

    expect(sortedMovies[0].title).toBe("B");
    expect(sortedMovies[1].title).toBe("A");
  });

  test("should sort movies by name in descending order", () => {
    const movies = [
      { title: "A", rating: 4.5, released: 1998 },
      { title: "B", rating: 3.8, released: 2022 },
    ];

    const sortedMovies = sortMovies(movies, "name");

    expect(sortedMovies[0].title).toBe("A");
    expect(sortedMovies[1].title).toBe("B");
  });

  test("send unknown sort type, will stay the same", () => {
    const movies = [
      { title: "A", rating: 4.5, released: 1998 },
      { title: "B", rating: 3.8, released: 2022 },
    ];

    const sortedMovies = sortMovies(movies, "phone");

    expect(sortedMovies[0].title).toBe("A");
    expect(sortedMovies[1].title).toBe("B");
  });
});
