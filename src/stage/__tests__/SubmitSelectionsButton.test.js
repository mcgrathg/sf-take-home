import React from 'react';
import { render } from 'react-testing-library';
import { noOp } from 'test-utils';
import SubmitSelectionsButton from '../SubmitSelectionsButton';

test('renders', () => {
  const { container } = render(
    <SubmitSelectionsButton onClickHandler={noOp} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
