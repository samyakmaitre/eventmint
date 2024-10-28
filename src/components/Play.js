import React from "react";
import "../assets/styles/Play.css";
import { Link } from "react-router-dom";

function Play({ id, image, name, ranking, participants, category }) {
  return (
    <div className="play">
      <img src={image} alt={`${name} image`} className="play-poster" />
      <p className="play-ranking">
        <span className="ranking-badge">🎭</span>
        <span className="ranking-points"> {ranking} </span>
        <span className="participants">({participants} Participants)</span>
      </p>
      <h2 className="play-name">{name}</h2>
      <p className="play-category">{category}</p>
      <Link to={`/plays/${id}`}>
        <button className="more-details-button">More Details</button>
      </Link>
    </div>
  );
}

export default Play;
