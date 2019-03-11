import React from 'react';
import { render } from 'react-testing-library';
import FadeIn from '../FadeIn';

test('renders', () => {
  const { container } = render(
    <FadeIn>
      <div>something</div>
    </FadeIn>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
