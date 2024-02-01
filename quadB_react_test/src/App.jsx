import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import MovieSummary from "./components/MovieSummary/MovieSummary";
import BookingPage from "./components/BookingPage/BookingPage";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setMovies(response.data);
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route
          path="/summary/:movieId"
          element={<MovieSummary movies={movies} />}
        />
        <Route path="/booking/:movieId" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
