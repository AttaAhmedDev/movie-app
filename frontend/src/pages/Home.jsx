import { useState , useEffect} from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies , searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, SetSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchMovies = async()=>{
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch(err){
        console.log(err)
        setError("Failed to load movies")
      } 
      finally{ setLoading(false) }
    }

    fetchMovies()
  },[])

  const handleSearch = async (e) => {
    e.preventDefault();
    // for prevent user entry empty string and not search again if loading
    if(!searchQuery.trim()) return 
    if (loading) return 

    setLoading(true)

    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch(err){
      console.log(err)
      setError("Failed to search movies")
    } finally{ setLoading(false) }

  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Discover Films</h1>
        <p>Browse your collection and find the next title worth watching.</p>
      </header>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies…"
          className="search-input"
          value={searchQuery}
          onChange={(e) => SetSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <p className="home-status home-status--error">{error}</p>}

      {loading ? (
        <div className="movies-grid movies-grid--loading" aria-busy="true" aria-label="Loading movies">
          {Array.from({ length: 8 }, (_, i) => (
            <div className="movie-skeleton" key={i}>
              <div className="movie-skeleton__poster" />
              <div className="movie-skeleton__line movie-skeleton__line--title" />
              <div className="movie-skeleton__line movie-skeleton__line--meta" />
            </div>
          ))}
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
