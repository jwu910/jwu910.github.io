import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Portfolio from './js/components/portfolio/Portfolio';
import NavBar from './js/components/navigation/NavBar';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />

          <Route path="/test" component={ NavBar } />
          <Route path="/portfolio" component={ Portfolio } />
        </Switch>
      </div>
    );
  }
}

export default Main;