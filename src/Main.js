import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Portfolio from './js/components/portfolio';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ Home } />
          <Route path="/portfolio" component={ Portfolio } />
          {/* Routes to pages*/}
        </Switch>
      </div>
    )
  }
}

export default Main;