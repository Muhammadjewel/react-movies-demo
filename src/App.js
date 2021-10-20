import movies from "./movies.js";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="movies-list">
          { movies.sort((a, b) => {
            if (a.imdbRating < b.imdbRating) return 1;
            if (a.imdbRating > b.imdbRating) return -1;
            return 0;
          }).slice(0, 100).map(movie => <MovieCard info={movie} />) }
        </div>
      </div>
    </div>
  );
}

export default App;
