import star from "../../assets/star.png";
import "./sort.css";

export default function Sort({ sortType, onSort }) {
  const sorts = [
    { name: "rating", show: <img className="star" src={star} alt="rating" /> },
    { name: "year", show: 1998 },
    { name: "name", show: "Ab" },
  ];
  return (
    <div className="sort-component">
      <label htmlFor="sort">Sort By:</label>
      {sorts.map(({ name, show }) => (
        <button
          key={name}
          title={name}
          className={`sort-btn ${sortType === name ? "chosen" : ""}`}
          onClick={() => onSort(name)}
        >
          {show}
        </button>
      ))}
    </div>
  );
}
