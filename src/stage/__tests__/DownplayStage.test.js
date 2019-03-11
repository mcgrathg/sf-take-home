import React from 'react';
import { render } from 'react-testing-library';
import { noOp } from 'test-utils';
import DownplayStage from '../DownplayStage';

test('renders', () => {
  const { container } = render(<DownplayStage options={[]} onSubmit={noOp} />);

  expect(container.firstChild).toMatchSnapshot();
});
