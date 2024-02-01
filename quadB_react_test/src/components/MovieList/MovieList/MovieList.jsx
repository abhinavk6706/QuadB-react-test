
import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-8 lg:mx-10 mx-5">
      <h2 className="text-3xl font-bold text-center mb-4">Movie List</h2>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <li key={movie.show.id} className="bg-white rounded-md shadow p-4 pb-5">
            {movie.show.image && movie.show.image.medium && (
              <img
                src={movie.show.image.medium}
                alt={movie.show.name}
                className="w-full rounded-md object-cover mb-4"
              />
            )}
            <p className="text-lg font-semibold my-4">{movie.show.name}</p>
            <Link
              to={`/summary/${movie.show.id}`}
              className="bg-[#ec5e71] text-white rounded px-4 py-2"
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
