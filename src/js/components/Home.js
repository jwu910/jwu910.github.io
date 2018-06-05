import React from 'react';

import { Link } from 'react-router-dom';
// import nav bar
// import profile picture
// import about snippet

class Home extends React.Component {
  render() {
    const currentPath = window.location.search.split('=')[1];

    if (currentPath) {
      window.location.path = currentPath;
    }

    return (
      <div className="home-container">
        <h3>We're technically still under construction...</h3>
        <h4>
          But please check out some of my
          <a href="/portfolio">current projects!</a>
        </h4>
      </div>
    );
  }
}

export default Home;
