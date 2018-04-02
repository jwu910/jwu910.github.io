import React from 'react';

import ProjectList from './ProjectList'

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <div className="portfolio-container">
          <ProjectList />
        </div>
      </div>
    );
  }
}

export default Portfolio;