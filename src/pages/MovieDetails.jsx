import { useNavigate, useParams } from "react-router-dom";
import { API_Key, BASE_URL } from "../services/api";
import { useEffect, useState } from "react";
import "../styles/MovieDetails.css";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_Key}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
        navigate("/"); // Redirect to home if there's an error
      }
    };
    fetchMovieDetails();
  }, [id, navigate]);

  if (!movie) return <div>Loading...</div>;
  if (movie.status_code === 404) {
    // If the movie is not found, show a message
    return <div>Movie not found</div>;
  }
  return (
    <div className="movie-detail">
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      <p>
        <strong>Description:</strong> {movie.overview}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Original Language:</strong> {movie.original_language}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.runtime} min
      </p>
    </div>
  );
}
