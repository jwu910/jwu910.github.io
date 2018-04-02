import React from 'react';

import ProjectList from './ProjectList'

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <div className="portfolio-wrapper">
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default Portfolio;