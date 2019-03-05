import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * This test suite uses Jest. A basic reference is available here:
 * https://jestjs.io/docs/en/expect.html#content
 */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('tests your new code', () => {
  throw new Error('Add tests here');
});
