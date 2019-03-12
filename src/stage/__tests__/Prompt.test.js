import React from 'react';
import { render } from 'react-testing-library';
import Prompt from '../Prompt';

describe('Prompt', () => {
  it('renders', () => {
    const { container } = render(<Prompt />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
