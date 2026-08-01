import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const year = movie.release_date?.split("-")[0];

  function FavoriteMovie(e) {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="movie-poster-fallback">
            <span>{movie.title}</span>
          </div>
        )}
        <div className="movie-overlay" />
        <button
          type="button"
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={FavoriteMovie}
          aria-label={`Favorite ${movie.title}`}
        >
          <FaHeart size={14} />
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {year && <p>{year}</p>}
      </div>
    </Link>
  );
}

export default MovieCard;
