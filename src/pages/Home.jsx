import { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  //   state variables
  const [searchInput, setSearchInput] = useState("");

  const movies = [
    { id: 1, title: "Terminator", release_date: "2015" },
    { id: 2, title: "The Matrix", release_date: "1984" },
    { id: 3, title: "Trauma", release_date: "2024" },
  ];

  //   onSubmit handler for the search form
  const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.querySelector(".search-input").value;
    console.log("Search submitted for:", searchInput);
    // Here you would typically trigger a search function or API call
  };

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
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => {
          return (
            movie.title.toLowerCase().startsWith(searchInput) && (
              <MovieCard movie={movie} key={movie.id} />
            )
          );
        })}
      </div>
    </div>
  );
}
