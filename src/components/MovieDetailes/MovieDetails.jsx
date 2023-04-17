import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css"; // import your CSS file

const MovieDetails = ({ movies }) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    setDetails(movies.filter((movie) => movie.id === id)[0]);
  }, [id]);

  const home = () => {
    navigate("/");
  };

  return (
    <div className="movie-details-container">
      <h1 className="movie-details-title">{details.title}</h1>
      <div className="movie-details-video-container">
        <iframe
          width="560"
          height="315"
          src={details.trailer}
          title={details.title}
          frameBorder = "0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p className="movie-details-description">{details.description}</p>
      <button className="movie-details-button" onClick={home}>
        GO BACK HOME
      </button>
    </div>
  );
};

export default MovieDetails;
