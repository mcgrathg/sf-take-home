import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    color: ${colors.greyDark};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background: ${colors.greyLight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
  }

  button {
    &:focus {
      outline: none;
      transition: box-shadow 0.15s, transform 0.1s;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
