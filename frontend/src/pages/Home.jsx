import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, SetSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", releaseDate: "2024", tone: ["#3d2a1f", "#1a1210"] },
    { id: 2, title: "Terminator", releaseDate: "2025", tone: ["#1f2d3d", "#0e141c"] },
    { id: 3, title: "Die Hard", releaseDate: "2026", tone: ["#3d1f24", "#140c0e"] },
    { id: 4, title: "Good Man", releaseDate: "2025", tone: ["#2a3d2f", "#0e1410"] },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    SetSearchQuery("");
  };

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

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

      <div className="movies-grid">
        {filtered.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
