import React from 'react';
import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';

describe('Snapshots', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});