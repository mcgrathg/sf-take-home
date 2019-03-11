import React from 'react';
import { render } from 'react-testing-library';
import { noOp } from 'test-utils';
import OptionToggle from '../OptionToggle';

test('renders', () => {
  const { container } = render(
    <OptionToggle option="" isSelected={false} onToggled={noOp} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
