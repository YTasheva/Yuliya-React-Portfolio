import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data.json";

const Project = () => {
    const { id } = useParams();
    const project = projectGallery.find((project) => project.id === id);
    
    return (
        <div className="container">
        <div className="row">
            <div className="col">
            <h1>{project.id}</h1>
            <h3>{project.description}</h3>
            <div>
            <a href={project.html_url} target="_blank" rel="noreferrer">
                <button className="btn bg-dark text-white m-2"> 
                <i className="fa-solid fa-github-link" aria-hidden="true"></i> GitHub
                </button>
            </a>
            <a href={project.deployed_url} target="_blank" rel="noreferrer">
                <button className="btn bg-dark text-white m-2">
                <i className="fa-solid fa-external-link" aria-hidden="true"></i> Deployed
                </button>
            </a>
            </div>
            <img className="img-fluid" src={project.image_url} alt={projectGallery.id} />
        </div>
    </div>
        <div className="row">
            <div className="col">
            <Link to="/projectGallery">← Back to Projects</Link>
            </div>
        </div>
      </div>
    );
    };

    export default Project;