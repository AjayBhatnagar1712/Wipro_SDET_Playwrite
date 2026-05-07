const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

function analyzeMovieStreams(movies = []) {
  const safeMovies = Array.isArray(movies) ? movies : [];
  const topGenres = ["Action", "Sci-Fi"];

  const topMovies = safeMovies
    .map((movie) => {
      const movieText = typeof movie === "string" ? movie : "";
      const [rawName = "", rawGenre = "", rawViews = ""] = movieText.split("|");
      const views = Number(rawViews);

      return {
        name: rawName.trim(),
        genre: rawGenre.trim(),
        views: Number.isFinite(views) ? views : 0
      };
    })
    .filter((movie) => topGenres.includes(movie.genre) && movie.views > 5000)
    .sort((firstMovie, secondMovie) => secondMovie.views - firstMovie.views);

  return JSON.stringify(topMovies);
}

if (typeof require === "undefined" || require.main === module) {
  const movieAnalyticsJson = analyzeMovieStreams(rawMovies);
  console.log(movieAnalyticsJson);
}

if (typeof module !== "undefined") {
  module.exports = { analyzeMovieStreams };
}
