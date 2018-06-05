import React from 'react';

// import nav bar
// import profile picture
// import about snippet

class Home extends React.Component {
  // On load, check if url has parameter and route to given route

  render() {
    return (
      <div className="home-container">
        <h3>We're technically still under construction...</h3>
        <h4>But please check out some of my <a href="/portfolio">current projects!</a></h4>
      </div>
    );
  }
}

export default Home;