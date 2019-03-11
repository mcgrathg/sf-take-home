import React from 'react';
import { render } from 'react-testing-library';
import { noOp } from 'test-utils';
import Stage from '../Stage';

test('renders', () => {
  const { container } = render(
    <Stage onSubmit={noOp} options={[]} prompt="" highlight="" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
