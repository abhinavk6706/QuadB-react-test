import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = () => {
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
    <div className="my-8 lg:mx-10 mx-5">
      <h2 className="text-3xl font-bold text-center mb-4">Movie List</h2>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <li key={movie.show.id} className="bg-white rounded shadow p-2 pb-4">
            {movie.show.image && movie.show.image.medium && (
              <img
                src={movie.show.image.medium}
                alt={movie.show.name}
                className="w-full object-cover mb-4"
              />
            )}
            <p className="text-lg font-semibold my-4">{movie.show.name}</p>
            <Link
              to={`/summary/${movie.show.id}`}
              className="bg-blue-500  text-white rounded px-4 py-2"
            >
              View Summary
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
