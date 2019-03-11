import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops.cjs';
import colors from '../config/colors';

const StyledPrompt = styled.h1`
  margin: 0 auto 1rem;
  color: ${colors.greyDark};
  font-size: 1.5rem;
  line-height: 1.75;
  font-weight: normal;
`;

const Highlighted = styled.span`
  position: relative;
  font-weight: 800;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.5rem;
    width: ${props => `${props.percent}%`};
    content: '';
    background-color: #ccf2f0;
    z-index: -1;
  }
`;

const Prompt = ({ prompt, highlight, promptEnd }) => (
  <StyledPrompt>
    {prompt}
    <Spring
      from={{ percent: 0 }}
      to={{ percent: 100 }}
      delay={500}
      config={{ duration: 500 }}
    >
      {({ percent }) => (
        <Highlighted percent={percent}>{highlight}</Highlighted>
      )}
    </Spring>
    {promptEnd}
  </StyledPrompt>
);

Prompt.propTypes = {
  prompt: PropTypes.string,
  highlight: PropTypes.string,
  promptEnd: PropTypes.string,
};

Prompt.defaultProps = {
  prompt: '',
  highlight: '',
  promptEnd: '?',
};

export default Prompt;
