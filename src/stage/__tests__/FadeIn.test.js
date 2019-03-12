import React from 'react';
import { render } from 'react-testing-library';
import FadeIn from '../FadeIn';

describe('FadeIn', () => {
  it('renders', () => {
    const { container } = render(
      <FadeIn>
        <div>something</div>
      </FadeIn>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
