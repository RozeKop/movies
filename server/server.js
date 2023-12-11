"use strict";
const express = require("express");
const path = require("path");
const logger = require("morgan");
const movies = require("./movies.json");
const { pageSize, sortMovies } = require("./movieConfig");

const app = express();
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "dist")));

app.get("/movies", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { query, page, sort } = req.query;
  let fillteredMovies = movies;
  if (query) {
    fillteredMovies = fillteredMovies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(query)
    );
  }

  const total = Math.ceil(fillteredMovies.length / pageSize);
  if (sort !== "default") {
    fillteredMovies = sortMovies(fillteredMovies, sort);
  }
  fillteredMovies = fillteredMovies.map((movie) => movie.id);
  fillteredMovies = fillteredMovies.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  res.send({
    results: fillteredMovies,
    total_pages: total,
  });
});

app.get("/movies/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(movies.filter((movie) => movie.id === req.params.id)[0]);
});

app.listen(3001, function () {
  console.log(`app listening on port ${3001}!`);
});

module.exports = app;
