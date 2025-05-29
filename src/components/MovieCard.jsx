import '../styles/MovieCard.css';

export default function MovieCard({ movie }) {
  // handler for favorite button click
  const handleFavoriteClick = () => {
    alert("clicked");
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-movie" onClick={handleFavoriteClick}>
            🩶
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
