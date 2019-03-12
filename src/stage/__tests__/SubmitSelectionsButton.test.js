import React from 'react';
import { render } from 'react-testing-library';
import { noOp } from 'test-utils';
import SubmitSelectionsButton from '../SubmitSelectionsButton';

describe('SubmitSelectionsButton', () => {
  it('renders', () => {
    const { container } = render(
      <SubmitSelectionsButton onClickHandler={noOp} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
