import React from 'react';
import { render } from 'react-testing-library';
import Prompt from '../Prompt';

test('renders', () => {
  const { container } = render(<Prompt />);

  expect(container.firstChild).toMatchSnapshot();
});
