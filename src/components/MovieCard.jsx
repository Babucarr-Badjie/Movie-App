import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import "../styles/MovieCard.css";

export default function MovieCard({ movie }) {
  // Access the context to get the addToFavorite and removeFromFavorite functions
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
  const isMovieFavorite = isFavorite(movie.id);

  // handler for favorite button click
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    // console.log("Clicked!", isMovieFavorite, movie.id, movie);
    if (isMovieFavorite) {
      removeFromFavorite(movie.id);
    } else {
      addToFavorite(movie);
    }
  };
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-link">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${isMovieFavorite ? "active" : ""}`}
              onClick={handleFavoriteClick}
            >
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </Link>
    </div>
  );
}
