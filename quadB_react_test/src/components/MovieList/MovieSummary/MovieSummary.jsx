import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieSummary = ({ movies }) => {
  const { movieId } = useParams();

  if (!movies) {
    return <div>Loading...</div>;
  }

  const selectedMovie = movies.find(
    (movie) => movie.show.id.toString() === movieId
  );

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{selectedMovie.show.name}</h2>
      <img
        src={selectedMovie.show.image.original}
        alt={selectedMovie.show.name}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg">{selectedMovie.show.summary}</p>
      <Link
        to={`/booking/${movieId}`}
        className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
      >
        Book Ticket
      </Link>
    </div>
  );
};

export default MovieSummary;
