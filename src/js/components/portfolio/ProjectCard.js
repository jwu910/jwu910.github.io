import React from 'react';

class ProjectCard extends React.Component {
  render() {
    const { title } = this.props;

    //@todo Render create link to component based on title

    return (
      <div className='project-card-wrapper'>
        <div className="title">{ title }</div>
      </div>
    );
  }
}

export default ProjectCard;