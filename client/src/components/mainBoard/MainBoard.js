import { useState } from "react";
import MovieList from "../movieList/MovieList";
import Search from "../search/Search";
import "./mainBoard.css";

export default function MainBoard() {
  const [query, setQuery] = useState("");

  function handleSearchChange(value) {
    setQuery(value);
  }

  return (
    <>
      <div className="main-board" data-testid="main-board">
        <div className="title">
          EXPLORE YOUR NEXT
          <br /> MOVIES AND TV SHOWS
        </div>
        <Search query={query} onChangeQuery={handleSearchChange} />
        <MovieList query={query} />
      </div>
    </>
  );
}
