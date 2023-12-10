import "./Search.css";
export default function Search({ query, onChangeQuery }) {
  return (
    <input
      data-testid="search"
      className="search-movies"
      type="text"
      value={query}
      onChange={(e) => onChangeQuery(e.target.value)}
      placeholder="search.."
    ></input>
  );
}
