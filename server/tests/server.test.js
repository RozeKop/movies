const request = require("supertest");
const app = require("../server");
const movies = require("../movies.json");

describe("GET /movies", () => {
  test("should respond with correct data", async () => {
    const response = await request(app).get("/movies");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("results");
    expect(response.body).toHaveProperty("total_pages");
  });
});

describe("GET /movies?query=the", () => {
  test("should respond with correct data", async () => {
    const response = await request(app).get("/movies?query=the");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("results");
    expect(response.body).toHaveProperty("total_pages");
  });
});

describe("GET /movies?query=the&page=2", () => {
  test("should respond with correct data", async () => {
    const response = await request(app).get("/movies?query=the&page=2");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("results");
    expect(response.body).toHaveProperty("total_pages");
  });
});

describe("GET /movies?sort=the", () => {
  test("should respond with correct data", async () => {
    const response = await request(app).get("/movies?sort=the");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("results");
    expect(response.body).toHaveProperty("total_pages");
  });
});

describe("GET /movies/:id", () => {
  test("should respond with correct movie data", async () => {
    const movieId = movies[0].id;
    const response = await request(app).get(`/movies/${movieId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("rating");
    expect(response.body).toHaveProperty("released");
    expect(response.body).toHaveProperty("synopsis");
    expect(response.body).toHaveProperty("image");
    expect(response.body).toHaveProperty("id", movieId);
  });
});
