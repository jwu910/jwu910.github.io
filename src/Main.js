import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Portfolio from './js/components/portfolio/Portfolio';
import Header from './js/components/Header';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />

          <Route path="/test" component={ Home } />
          <Route path="/portfolio" component={ Portfolio } />
        </Switch>
      </div>
    );
  }
}

export default Main;