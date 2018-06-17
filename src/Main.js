import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './js/components/Home';
import Portfolio from './js/components/portfolio/Portfolio';
import Header from './js/components/Header';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="wrap">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/portfolio" component={Portfolio} />

            <Route path="/contact" component={Portfolio} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
