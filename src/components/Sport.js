import React from "react";
import "../assets/styles/Sport.css";
import { Link } from "react-router-dom";

function Sport({ id, image, name, ranking, participants, category }) {
  return (
    <div className="sport">
      <img src={image} alt={`${name} image`} className="sport-poster" />
      <p className="sport-ranking">
        <span className="ranking-badge">🏅</span>
        <span className="ranking-points"> {ranking} </span>
        <span className="participants">({participants} Participants)</span>
      </p>
      <h2 className="sport-name">{name}</h2>
      <p className="sport-category">{category}</p>
      <Link to={`/sports/${id}`}>
        <button className="more-details-button">More Details</button>
      </Link>
    </div>
  );
}

export default Sport;
