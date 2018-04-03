import React from 'react';

import ProjectCard from './ProjectCard';

class ProjectList extends React.Component {
  render() {
    return (
      <div className="project-list-container">
        <ul>
          <li>
            <ProjectCard
              title="Check It Out"
              githubLink="/jwu910/check-it-out"
            />
          </li>

          <li>
            <ProjectCard
              title="Branchnote"
              githubLink="/jwu910/branchnote"
            />
          </li>

          <li>
            <ProjectCard
              title="Slng"
              githubLink="/5-gwoap/slng-node"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectList;