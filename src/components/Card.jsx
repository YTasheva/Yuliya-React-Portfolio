import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Card = ({ item }) => {
  return (
    <article className="project-card">
      <div className="project-thumb">
        <Link to={item.id} aria-label={`Open project ${item.id}`}>
          <img src={item.image_url} className="img-fluid" alt={item.id} />
        </Link>
        <div className="project-actions">
          <a
            href={item.html_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            <i className="bi bi-github me-1" aria-hidden="true"></i>
            Code
          </a>
          <a
            href={item.deployed_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm"
          >
            <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true"></i>
            Live
          </a>
        </div>
      </div>
      <div className="project-body">
        <div className="project-eyebrow">Featured work</div>
        <Link to={item.id} className="project-title">
          {item.id}
        </Link>
        <p className="project-summary">{item.description}</p>
        <div className="project-links">
          <Link to={item.id} className="project-link">
            <span>Details</span>
            <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
          </Link>
          <a
            href={item.deployed_url}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <span>Live</span>
            <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
