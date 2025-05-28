import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
