import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import "../styles/Home.css";

export default function Home() {
  //   state variables
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //   onSubmit handler for the search form
  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchInput.trim() === "") {
      setError("Please enter a search term.");
      return;
    }
    if (loading) {
      return; // Prevent multiple submissions while loading
    }

    setLoading(true);

    try {
      const searchResults = await searchMovies(searchInput);
      setMovies(searchResults);
      setError(null); // Clear any previous errors
      setSearchInput(""); // Clear the search input after submission
      setLoading(false); // Set loading to false after fetching results
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false); // Ensure loading is set to false in case of error
    }
  };

  //   useEffect to fetch popular movies on component mount
  useState(() => {
    const fetchMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-button" type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      {/* display error message if there is an error */}
      {error && <div className="error-message">{error}</div>}

      {/* loading state while fetching movies */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => {
            return (
              movie.title.toLowerCase().startsWith(searchInput) && (
                <MovieCard movie={movie} key={movie.id} />
              )
            );
          })}
        </div>
      )}
    </div>
  );
}
