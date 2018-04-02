import React from 'react';

import Main from './Main';

import './css/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Main />
      </div>
    );
  }
}

export default App;