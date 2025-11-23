import React from "react";

function Work({ title, description, image, link, tech }) {
  return (
    <div className="work-card">
  <h2>{title}</h2>
  <img src={image} alt={title} className="work-image" />
  <p>{description}</p>
  <p>Tech: {tech.join(", ")}</p>
  <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
</div>
  );
}

export default Work;
