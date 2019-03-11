import React from 'react';
import { render } from 'react-testing-library';
import CompletedStage from '../CompletedStage';

test('renders', () => {
  const { container } = render(
    <CompletedStage showOff={[]} downplay={[]} comfortable={[]} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
