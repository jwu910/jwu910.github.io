import React from 'react';
import renderer from 'react-test-renderer';

import ProjectList from '../ProjectList';

describe('Snapshots', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <ProjectList />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});