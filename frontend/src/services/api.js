const API_KEY = "0e57092fec5d174c92734c9d52222d6b";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }
  return response.json();
}

export const getPopularMovies = async () => {
  const data = await fetchJson(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  );
  return data.results;
};

export const searchMovies = async (query) => {
  const data = await fetchJson(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  return data.results;
};

export const getMovieDetails = async (id) => {
  return fetchJson(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const getMovieCredits = async (id) => {
  return fetchJson(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMovieVideos = async (id) => {
  const data = await fetchJson(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
  );
  return data.results;
};
