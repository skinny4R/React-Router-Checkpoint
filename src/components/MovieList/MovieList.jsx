import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
