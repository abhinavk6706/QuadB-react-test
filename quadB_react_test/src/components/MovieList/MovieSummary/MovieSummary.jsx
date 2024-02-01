import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieSummary = ({ movies }) => {
  const { movieId } = useParams();

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const selectedMovie = movies.find(
    (movie) => movie.show.id.toString() === movieId
  );

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="bg-white rounded-md  shadow mt-2 p-2 mx-4 pb-2">
      <div className="flex items-center gap-5">
      <div>
        <img
          src={selectedMovie.show.image.original}
          alt={selectedMovie.show.name}
          className="w-80 h-full rounded-md object-cover"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">{selectedMovie.show.name}</h2>
        <p className="text-base mb-4">{selectedMovie.show.summary}</p>
        <Link
          to={`/booking/${movieId}`}
          className="bg-[#ec5e71] text-white rounded px-4 py-2 "
        >
          Book Ticket
        </Link>
      </div>
      </div>
    </div>
  );
};

export default MovieSummary;
