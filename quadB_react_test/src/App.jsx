import React from "react";
import MovieList from "./components/MovieList/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieSummary from "./components/MovieList/MovieSummary/MovieSummary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />

          <Route
            path="/summary/:movieId"
            element={<MovieSummary  />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
