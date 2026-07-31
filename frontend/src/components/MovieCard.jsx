import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function FavouriteMovie() {
    alert("clicked");
  }

  const [toneA, toneB] = movie.tone || ["#2a3142", "#12141c"];

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.url ? (
          <img src={movie.url} alt={movie.title} />
        ) : (
          <div
            className="movie-poster-fallback"
            style={{ "--tone-a": toneA, "--tone-b": toneB }}
          >
            <span>{movie.title}</span>
          </div>
        )}
        <div className="movie-overlay" />
        <button
          className="favorite-btn"
          onClick={FavouriteMovie}
          aria-label={`Favorite ${movie.title}`}
        >
          <FaHeart size={14} />
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
