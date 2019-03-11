import React from 'react';
import { render } from 'react-testing-library';
import { noOp } from 'test-utils';
import OptionToggles from '../OptionToggles';

test('renders', () => {
  const { container } = render(
    <OptionToggles options={[]} selected={{}} onOptionToggled={noOp} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
