import React from 'react';

import ProjectCard from './ProjectCard';

class ProjectList extends React.Component {
  render() {
    return (
      <div className="project-list-wrapper">
        <ul>
          <li>
            <ProjectCard title="check-it-out"/>
          </li>

          <li>
            <ProjectCard title="branch-note"/>
          </li>

          <li>
            <ProjectCard title="slng"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectList;