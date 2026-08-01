function MovieOverview({ overview }) {
  if (!overview) {
    return (
      <section className="movie-section">
        <h2>Overview</h2>
        <p className="movie-section__empty">No overview available.</p>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <h2>Overview</h2>
      <p className="movie-overview">{overview}</p>
    </section>
  );
}

export default MovieOverview;
