import React from 'react';
import { render, fireEvent, within } from 'react-testing-library';
import { OPTIONS } from './config/constants';
import App from './App';

/**
 * This test suite uses Jest. A basic reference is available here:
 * https://jestjs.io/docs/en/expect.html#content
 */

describe('App', () => {
  const renderApp = () => {
    const { container, getByText, queryByText, getByTestId, debug } = render(
      <App />,
    );
    const getSubmitBtn = () => getByText('→');

    return {
      container,
      getByText,
      queryByText,
      getByTestId,
      debug,
      getSubmitBtn,
    };
  };

  const optionClickTests = btn => {
    expect(btn).not.toHaveClass('checked');
    expect(btn.getAttribute('aria-pressed')).toEqual('false');

    fireEvent.click(btn);

    expect(btn).toHaveClass('checked');
    expect(btn.getAttribute('aria-pressed')).toEqual('true');
  };

  it('renders without crashing', () => {
    const { container } = renderApp();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Shows first stage (ShowOff)', () => {
    const { getByText } = renderApp();

    expect(getByText(/what do you like to/i)).toHaveTextContent(
      /what do you like to show off\?/i,
    );

    OPTIONS.forEach(option => {
      expect(getByText(option)).toMatchSnapshot();
    });

    expect(getByText('→')).toMatchSnapshot();
  });

  it('shows second stage (Downplay) after submitting from ShowOff', () => {
    const { getByText, getSubmitBtn } = renderApp();

    fireEvent.click(getSubmitBtn());

    expect(getByText(/anything you'd like to/i)).toHaveTextContent(
      /anything you'd like to downplay\?/i,
    );

    OPTIONS.forEach(option => {
      expect(getByText(option)).toMatchSnapshot();
    });

    expect(getByText('→')).toMatchSnapshot();
  });

  it('shows Downplay stage without selected ShowOff options', () => {
    const { getByText, queryByText, getSubmitBtn } = renderApp();

    const selectedOptionsIdx = [0, 3];

    selectedOptionsIdx.forEach(idx => {
      optionClickTests(getByText(OPTIONS[idx]));
    });

    const dblClickedBtn = getByText(OPTIONS[2]);
    fireEvent.click(dblClickedBtn);
    fireEvent.click(dblClickedBtn);

    fireEvent.click(getSubmitBtn());

    OPTIONS.forEach((option, idx) => {
      if (selectedOptionsIdx.includes(idx)) {
        expect(queryByText(option)).toBeNull();
      } else {
        expect(getByText(option)).toMatchSnapshot();
      }
    });
  });

  it('shows Results stage', () => {
    const { getByText, getSubmitBtn } = renderApp();

    const selectedShowOffOptionsIdx = [0, 3];
    const selectedDownplayOptionsIdx = [1, 2];
    const dblClickedOptionIdx = OPTIONS.length - 1;

    selectedShowOffOptionsIdx.forEach(idx => {
      fireEvent.click(getByText(OPTIONS[idx]));
    });

    fireEvent.click(getSubmitBtn());

    // now at the downplay stage

    selectedDownplayOptionsIdx.forEach(idx => {
      optionClickTests(getByText(OPTIONS[idx]));
    });

    const dblClickedBtn = getByText(OPTIONS[dblClickedOptionIdx]);
    fireEvent.click(dblClickedBtn);
    fireEvent.click(dblClickedBtn);

    fireEvent.click(getSubmitBtn());

    // now at the results stage

    OPTIONS.forEach((option, idx) => {
      if (selectedShowOffOptionsIdx.includes(idx)) {
        const { getByText: getByTextWithin } = within(
          document.querySelector('[data-testid="show-off-results"]'),
        );
        expect(getByTextWithin(option)).toMatchSnapshot();
      } else if (selectedDownplayOptionsIdx.includes(idx)) {
        const { getByText: getByTextWithin } = within(
          document.querySelector('[data-testid="downplay-results"]'),
        );
        expect(getByTextWithin(option)).toMatchSnapshot();
      } else {
        const { getByText: getByTextWithin } = within(
          document.querySelector('[data-testid="other-results"]'),
        );
        expect(getByTextWithin(option)).toMatchSnapshot();
      }
    });
  });
});
