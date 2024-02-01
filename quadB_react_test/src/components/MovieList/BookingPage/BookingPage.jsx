import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../common/Button";
import Form from "../common/Form";
import InputField from "../common/InputField";

const BookingPage = () => {
  const { movieId } = useParams();
  const [formData, setFormData] = useState({
    movieName: "",
    userName: "",
    userEmail: "",
    numTickets: 1,
  });

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/shows/${movieId}`
        );
        setSelectedMovie(response.data);
        setFormData((prevData) => ({
          ...prevData,
          movieName: response.data.name,
        }));
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    localStorage.setItem("userDetails", JSON.stringify(formData));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md mt-8">
      {selectedMovie && (
        <>
          <h2 className="text-xl font-bold mb-4">
            Book Tickets for {selectedMovie.name}
          </h2>
          <img
            src={selectedMovie.image.original}
            alt={selectedMovie.name}
            className="mb-2 rounded-md"
          />
        </>
      )}
      <Form onSubmit={handleFormSubmit}>
        <InputField
          label="Your Name:"
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />

        <InputField
          label="Your Email:"
          type="email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleInputChange}
        />

        <InputField
          label="Number of Tickets:"
          type="number"
          name="numTickets"
          value={formData.numTickets}
          onChange={handleInputChange}
        />

        <Button
          type="submit"
          style="bg-[#ec5e71] text-white rounded px-4 py-2 mt-3 hover:bg-red-700"
        >
          Confirm Booking
        </Button>
      </Form>
    </div>
  );
};

export default BookingPage;
