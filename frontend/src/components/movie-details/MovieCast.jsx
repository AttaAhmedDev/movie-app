function MovieCast({ cast }) {
  const actors = cast || [];

  if (actors.length === 0) {
    return (
      <section className="movie-section">
        <h2>Cast</h2>
        <p className="movie-section__empty">Cast information unavailable.</p>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <h2>Cast</h2>
      <ul className="movie-cast">
        {actors.map((person) => {
          const photo = person.profile_path
            ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
            : null;

          return (
            <li
              className="movie-cast__item"
              key={person.cast_id || person.credit_id || person.id}
            >
              <div className="movie-cast__photo">
                {photo ? (
                  <img src={photo} alt={person.name} loading="lazy" />
                ) : (
                  <span className="movie-cast__initial">
                    {person.name?.charAt(0) || "?"}
                  </span>
                )}
              </div>
              <p className="movie-cast__name">{person.name}</p>
              <p className="movie-cast__role">{person.character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MovieCast;
