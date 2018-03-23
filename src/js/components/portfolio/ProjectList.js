import React from 'react';

import ProjectCard from './ProjectCard';

class ProjectList extends React.Component {
  render() {
    return (
      <div className="project-list-wrapper">
        <ul>
          <ProjectCard title="check-it-out"/>
          <ProjectCard title="branch-note"/>
          <ProjectCard title="slng"/>
        </ul>
      </div>
    );
  }
}

export default ProjectList;