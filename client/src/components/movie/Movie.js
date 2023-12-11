import { useState, useEffect } from "react";
import Rating from "../rating/Rating";
import Modal from "../modal/Modal";
import "./movie.css";
import MovieCard from "./MovieCard";

export default function Movie({ id }) {
  const [movie, setMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        const response = await fetch(`http://localhost:3001/movies/${id}`);
        const data = await response.json();
        if (!data || data.length === 0) {
          setError("Data not available");
        } else {
          const { title, image, rating, released, synopsis, runtime } = data;
          if (title && image && released && synopsis && runtime) {
            setMovie({ title, image, rating, released, synopsis, runtime });
          } else {
            setError("Incomplete data");
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };

    fetchData();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {error && <p>Oops, something went wrong</p>}
      {!error && (
        <div className="movie" onClick={openModal} data-testid="movie">
          <img className="movie-image" src={movie.image} alt={movie.title} />
          <div className="movie-details">
            <div className="movie-title">
              {movie.title} ({movie.released})
            </div>
            <Rating rating={movie.rating} />
            <div className="read-more">
              <span>Read more</span>
              <span className="arrow">&rarr;</span>
            </div>
          </div>
          {isModalOpen && (
            <Modal>
              <MovieCard
                movie={movie}
                onClose={() => {
                  setIsModalOpen(false);
                }}
              />
            </Modal>
          )}
        </div>
      )}
    </>
  );
}
