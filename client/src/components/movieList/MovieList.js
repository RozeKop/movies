import React, { useState, useEffect } from "react";
import Movie from "../movie/Movie";
import Pagination from "../pagination/Pagination";
import Sort from "../sort/Sort";
import "./movieList.css";

export default function MovieList({ query }) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCurrentPage(0);
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          `http://localhost:3001/movies?query=${query}&page=${currentPage}&sort=${sort}`
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, currentPage, sort]);

  function onNext() {
    setCurrentPage((prev) => prev + 1);
  }

  function onPrev() {
    setCurrentPage((prev) => prev - 1);
  }

  function handleSortChange(value) {
    setSort(value);
    setCurrentPage(0);
  }

  return (
    <>
      {error && <p>Sorry there is currently an error, please return later</p>}
      {loading && <p>Loading..</p>}
      {!loading && movies.length > 0 && (
        <div className="movies">
          <Sort sortType={sort} onSort={handleSortChange} />
          <div className="movie-grid">
            {movies.map((movie) => (
              <Movie key={movie} id={movie} />
            ))}
          </div>
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPrev={onPrev}
            onNext={onNext}
          />
        </div>
      )}
      {!loading && movies.length === 0 && (
        <div>
          <p>No movies found</p>
        </div>
      )}
    </>
  );
}
