import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const removeHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
};

const MovieSummary = ({ movies }) => {
  const { movieId } = useParams();
  const [showFullSummary, setShowFullSummary] = useState(false);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const selectedMovie = movies.find(
    (movie) => movie.show.id.toString() === movieId
  );

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  const fullSummary = selectedMovie.show.summary;
  const truncatedSummary =
    removeHtmlTags(fullSummary).substring(0, 150) + "... ";
  const shouldShowButton = removeHtmlTags(fullSummary).length > 150;

  const handleToggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  return (
    <div className="bg-white rounded-md h-full max-w-2xl shadow mt-2 p-4 mx-4 pb-2">
      <div className="flex items-center gap-5">
        <div>
          <img
            src={selectedMovie.show.image.original}
            alt={selectedMovie.show.name}
            className="w-full h-96 rounded-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">{selectedMovie.show.name}</h2>
          <p className="text-base mb-4 max-w-md">
            {showFullSummary ? removeHtmlTags(fullSummary) : truncatedSummary}

            {shouldShowButton && (
              <button
                onClick={handleToggleSummary}
                className="text-blue-500 cursor-pointer mt-1 focus:outline-none"
              >
                {showFullSummary ? "Show Less" : "Show More"}
              </button>
            )}
          </p>
          <Link
            to={`/booking/${movieId}`}
            className="bg-[#ec5e71] text-white rounded px-4 py-2"
          >
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
