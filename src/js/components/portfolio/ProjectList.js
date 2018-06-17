import React from 'react';

import ProjectCard from './ProjectCard';

import projects from '../../../../projects.json';

class ProjectList extends React.Component {
  render() {
    const keys = Object.keys(projects);

    return (
      <div className="project-list-container">
        <ul>
          {
            keys.map(projectName => {
              const {
                description,
                externalLink,
                githubLink,
                title
              } = projects[projectName];

              return (
                <li key={title}>
                  <ProjectCard
                    description={description}
                    externalLink={externalLink}
                    githubLink={githubLink}
                    title={title}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default ProjectList;