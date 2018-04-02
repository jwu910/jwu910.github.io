import React from 'react';
import renderer from 'react-test-renderer';

import ProjectCard from '../ProjectCard';

describe('Snapshots', () => {
  it('Renders correctly', () => {
    const component = renderer
      .create(
        <ProjectCard />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});