import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";
import "../styles/Favorites.css";

export default function Favorites() {
  // Access the context to get the favorites list
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className={`movies-grid${favorites.length === 1 ? " single" : ""}`}>
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorite and they will appear here</p>
    </div>
  );
}
