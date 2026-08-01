import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
function MovieCard({ movie }) {
  // for use context in the components
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext()
  const favorite = isFavorite(movie.id)
  
  function FavoriteMovie(e) {
    e.preventDefault()
    if(favorite){
      removeFromFavorites(movie.id)
    }else addToFavorites(movie)
  }
  return (
    <div className="movie-card">
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
        // for add active class if movie is favorite
          className={`favorite-btn ${favorite && "active" }`  }
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
