import React from 'react';
import { render } from 'react-testing-library';
import { noOp } from 'test-utils';
import ShowOffStage from '../ShowOffStage';

describe('ShowOffStage', () => {
  it('renders', () => {
    const { container } = render(
      <ShowOffStage options={[]} onSubmit={noOp} prompt="" highlight="" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
