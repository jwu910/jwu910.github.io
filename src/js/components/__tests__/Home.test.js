import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home';

describe('Snapshots', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
          <Home />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});