import React from 'react';
import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from '../NavBar';

describe('Snapshots', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <Router>
          <NavBar />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});