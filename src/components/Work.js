/* eslint-disable react/prop-types */
import React from 'react';

function Work({ title, description, image, link, tech }) {
  return (
    <div className="work-card">
      <h2 className="work-title">{title}</h2>

      {image && <img src={image} alt={title} className="work-image" />}

      <p className="work-description">{description}</p>

      {tech && (
        <p className="work-tech">
          <strong>Tech:</strong> {tech.join(', ')}
        </p>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="work-link"
      >
        View Project
      </a>
    </div>
  );
}

export default Work;
