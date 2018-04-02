import React from 'react';
import renderer from 'react-test-renderer';

import Portfolio from '../Portfolio';

describe('Snapshots', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <Portfolio />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});