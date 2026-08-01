import { FaHeart, FaStar, FaClock, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMovieContext } from "../../contexts/MovieContext";

function MovieHero({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const year = movie.release_date?.split("-")[0];
  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : null;

  function handleFavorite(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <section className="movie-hero">
      <div
        className="movie-hero__backdrop"
        style={backdrop ? { backgroundImage: `url(${backdrop})` } : undefined}
      />
      <div className="movie-hero__shade" />

      <div className="movie-hero__content">
        <Link to="/" className="movie-hero__back">
          <FaArrowLeft size={12} />
          Back
        </Link>

        <div className="movie-hero__layout">
          {poster && (
            <img
              className="movie-hero__poster"
              src={poster}
              alt={`${movie.title} poster`}
            />
          )}

          <div className="movie-hero__meta">
            <h1>{movie.title}</h1>
            {movie.tagline && (
              <p className="movie-hero__tagline">{movie.tagline}</p>
            )}

            <div className="movie-hero__stats">
              {movie.vote_average > 0 && (
                <span className="movie-hero__stat">
                  <FaStar size={13} />
                  {movie.vote_average.toFixed(1)}
                </span>
              )}
              {year && <span className="movie-hero__stat">{year}</span>}
              {runtime && (
                <span className="movie-hero__stat">
                  <FaClock size={12} />
                  {runtime}
                </span>
              )}
            </div>

            {movie.genres?.length > 0 && (
              <ul className="movie-hero__genres">
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            )}

            <button
              type="button"
              className={`movie-hero__favorite ${favorite ? "active" : ""}`}
              onClick={handleFavorite}
            >
              <FaHeart size={14} />
              {favorite ? "In Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieHero;
