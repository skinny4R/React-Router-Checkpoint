import React from "react";
import ReactStars from "react-stars";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movie-card">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      {/* <h5>{movie.description}</h5> */}
      <div className="stars">
        <ReactStars
          count={5}
          edit={false}
          size={24}
          half={false}
          value={movie.rating}
          color2={"#ffd700"}
        />
        <Link to={`/movie/${movie.id}`}>
          <button variant="warning" style={{ marginLeft: "40%" }}>
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
