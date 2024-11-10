import React from "react";
import "../assets/styles/Play.css";
import { Link } from "react-router-dom";

function Play({ id, image, name, ranking, participants, category }) {
  return (
    <div className="play h-96">
      <img src={image} alt={`${name} image`} className="play-poster h-1/2" />
      <p className="play-ranking">
        <span className="pr-4">
        <span className="ranking-badge">🎭</span>
        <span className="ranking-points"> {ranking} </span>
        </span>
        <span className="participants pl-5">({participants} Participants)</span>
      </p>
      <div className="pt-3">
      <h2 className="play-name">{name}</h2>
      <p className="play-category">{category}</p>
      </div>
      <Link to={`/plays/${id}`}>
        <button className="more-details-button">More Details</button>
      </Link>
    </div>
  );
}

export default Play;
