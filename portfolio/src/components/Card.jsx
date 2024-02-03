import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Card = ({ project }) => {
  return (
    <div className="card">
      <Link to={`{project.id}`}>
        <h3 className="card-title">{item.id}</h3>
      </Link>
      <p className="card-text">{item.description}</p>
      <Link to={`{project.id}`}>
        <img src={project.image_url} className="img-fluid img-thumbnail" alt={project.id} />
      </Link>
    </div>
  );
};

export default Card;

