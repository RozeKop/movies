import { useState, useEffect } from "react";
import Rating from "../rating/Rating";
import Modal from "../modal/Modal";
import "./movie.css";
import MovieCard from "./MovieCard";

export default function Movie({ id }) {
  const [movie, setMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/movies/${id}`);
        const data = await response.json();
        const { title, image, rating, released, synopsis, runtime } = data[0];
        setMovie({ title, image, rating, released, synopsis, runtime });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="movie" onClick={openModal}>
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
  );
}
