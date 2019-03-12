import React from 'react';
import { render } from 'react-testing-library';
import ResultsStage from '../ResultsStage';

describe('ResultsStage', () => {
  it('renders', () => {
    const { container } = render(
      <ResultsStage showOff={[]} downplay={[]} comfortable={[]} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
