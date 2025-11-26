import React from 'react';
import PropTypes from 'prop-types';

function Resources({ title, image, summary, link }) {
  return (
    <div className="resources-card">
      {image && <img src={image} alt={title} className="resources-image" />}

      <div className="resources-content">
        <h3 className="resources-title">{title}</h3>

        <p className="resources-summary">{summary}</p>

        <a
          className="resources-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

Resources.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Resources;
