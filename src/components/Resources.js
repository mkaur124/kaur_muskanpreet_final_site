import React from "react";

function Resources({ title, image, summary, link }) {
  return (
    <div className="resources-card">
      <img src={image} alt={title} />
      <div className="resources-content">
        <h3>{title}</h3>
        <p>{summary}</p>
        <a className="work-link" href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Resources;
