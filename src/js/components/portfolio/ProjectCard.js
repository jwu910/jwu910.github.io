import React from 'react';

class ProjectCard extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className='project-card-wrapper'>
        <div className="title">{ title }</div>
      </div>
    );
  }
}

export default ProjectCard;