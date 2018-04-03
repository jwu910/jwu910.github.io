import PropTypes from 'prop-types';
import React from 'react';

class ProjectCard extends React.Component {
  render() {
    const { title, githubLink } = this.props;

    //@todo Render create link to component based on title

    // github link and stars badge
    // github link to demo
    // Add icon/image

    return (
      <div className="project-card-container">
        <a className="githubLink" href={`https://github.com${githubLink}`}>
          <div className="card-wrapper">
              <div className="card-box">
                <div className="card-title">
                  <span className="title">{ title }</span>
                </div>
                <div className="card-content">
                </div>
              </div>
          </div>
        </a>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  githubLink: PropTypes.string
};

export default ProjectCard;