import React from 'react';
import { render } from 'react-testing-library';
import { childrenFunc } from 'test-utils';
import OptionsHandler from '../OptionsHandler';

test('renders', () => {
  const { container } = render(<OptionsHandler>{childrenFunc}</OptionsHandler>);

  expect(container.firstChild).toMatchSnapshot();
});
