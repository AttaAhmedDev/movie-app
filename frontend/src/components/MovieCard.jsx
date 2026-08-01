import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function FavoriteMovie() {
    alert("clicked");
  }
  // check if movie.tone is empty or false take value after or
  const [toneA, toneB] = movie.tone || ["#2a3142", "#12141c"];

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
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
          onClick={FavoriteMovie}
          //for enhance accessibility
          aria-label={`Favorite ${movie.title}`}
        >
          {/* component icon for heart in react-icons*/}
          <FaHeart size={14} />
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {/* for get year of movie not all date */}
        <p>{(movie.release_date).split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
