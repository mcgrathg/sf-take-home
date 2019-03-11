import React from 'react';
import { render } from 'react-testing-library';
import { childrenFunc } from 'test-utils';
import StageSelectionHandler from '../StageSelectionHandler';

test('renders', () => {
  const { container } = render(
    <StageSelectionHandler>{childrenFunc}</StageSelectionHandler>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
