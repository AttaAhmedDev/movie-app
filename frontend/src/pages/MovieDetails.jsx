import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieVideos,
} from "../services/api";
import MovieHero from "../components/movie-details/MovieHero";
import MovieOverview from "../components/movie-details/MovieOverview";
import MovieCast from "../components/movie-details/MovieCast";
import MovieTrailer from "../components/movie-details/MovieTrailer";
import "../css/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const [details, credits, videoList] = await Promise.all([
          getMovieDetails(id),
          getMovieCredits(id),
          getMovieVideos(id),
        ]);
// for check if the component is unmounted
        if (cancelled) return;

        setMovie(details);
        setCast(credits.cast || []);
        setVideos(videoList || []);
      } catch (err) {
        console.log(err);
        if (!cancelled) setError("Failed to load movie details");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadMovie();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="movie-details movie-details--loading" aria-busy="true">
        <div className="movie-details__skeleton-hero" />
        <div className="movie-details__body">
          <div className="movie-details__skeleton-line" />
          <div className="movie-details__skeleton-line movie-details__skeleton-line--short" />
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="movie-details movie-details--error">
        <p>{error || "Movie not found"}</p>
      </div>
    );
  }

  return (
    <article className="movie-details">
      <MovieHero movie={movie} />
      <div className="movie-details__body">
        <MovieOverview overview={movie.overview} />
        <MovieCast cast={cast} />
        <MovieTrailer videos={videos} />
      </div>
    </article>
  );
}

export default MovieDetails;
