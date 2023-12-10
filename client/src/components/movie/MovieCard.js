import Rating from "../rating/Rating";
export default function MovieCard({ movie, onClose }) {
  const synopsis = new DOMParser().parseFromString(movie.synopsis, "text/html")
    .body.textContent;

  return (
    <div className="movie-card">
      <div className="movie-card-img">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie">
        <div className="movie-info">
          <div className="movie-card-title">{movie.title}</div>
          <div className="movie-card-runtime">{movie.runtime}</div>
          <Rating rating={movie.rating} showFraction={true} />
          <div className="movie-card-synopsis">{synopsis}</div>
        </div>
        <div className="read-more right" onClick={onClose}>
          &larr;<span>Back to list </span>
        </div>
      </div>
    </div>
  );
}
