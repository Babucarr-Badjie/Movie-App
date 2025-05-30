import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/MovieContext";
import MovieDetails from "./pages/MovieDetails";
import "./styles/App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
