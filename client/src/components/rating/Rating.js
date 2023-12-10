import star from "../../assets/star.png";
import "./rating.css";
export default function Rating({ rating, showFraction = false }) {
  const adjustedScore = showFraction ? `${rating}/10` : rating;
  return (
    <div className="rating">
      <img className="star" src={star} alt="star" /> {rating && adjustedScore}
    </div>
  );
}
