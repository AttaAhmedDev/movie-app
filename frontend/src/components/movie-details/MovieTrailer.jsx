function pickTrailer(videos) {
  if (!videos?.length) return null;

  const officialTrailer = videos.find(
    (video) =>
      video.site === "YouTube" &&
      video.type === "Trailer" &&
      video.official,
  );

  if (officialTrailer) return officialTrailer;

  return (
    videos.find(
      (video) => video.site === "YouTube" && video.type === "Trailer",
    ) ||
    videos.find((video) => video.site === "YouTube" && video.type === "Teaser") ||
    videos.find((video) => video.site === "YouTube") ||
    null
  );
}

function MovieTrailer({ videos }) {
  const trailer = pickTrailer(videos);

  if (!trailer) {
    return (
      <section className="movie-section">
        <h2>Trailer</h2>
        <p className="movie-section__empty">No trailer available.</p>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <h2>Trailer</h2>
      <div className="movie-trailer">
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name || "Movie trailer"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default MovieTrailer;
