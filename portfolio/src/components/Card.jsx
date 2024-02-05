import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Card = ({ item }) => {
  return (
    <div className="card mb-5">
      <Link to={`{item.id}`}>
        <h3 className="card-title">{item.id}</h3>
      </Link>
      <p className="card-text">{item.description}</p>
      <Link to={`{item.id}`}>
        <img
          src={item.image_url}
          className="img-fluid img-thumbnail"
          alt={item.id}
        />
      </Link>
    </div>
  );
};

export default Card;
