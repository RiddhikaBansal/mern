import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {/* Display multiple images if they exist */}
      {project.images && project.images.length > 0 ? (
        <div className="project-images">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`${project.title}`} className="project-image" />
          ))}
        </div>
      ) : (
        <img src={project.image}  className="project-image" />
      )}

      <a href={project.github} target="_blank" rel="noopener noreferrer">View code on GitHub</a>
    </div>
  );
};

export default Project;
