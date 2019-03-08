import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import colors from '../config/colors';

const StyledPrompt = styled.p`
  margin: 0 auto 1rem;
  color: ${colors.greyDark};
  font-size: 1.5rem;
  line-height: 1.75;
`;

const Highlighted = styled.span`
  position: relative;
  font-weight: 800;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.5rem;
    width: ${props => props.width};
    content: '';
    background-color: #ccf2f0;
    z-index: -1;
  }
`;

const Prompt = ({ prompt, highlight, promptEnd }) => (
  <StyledPrompt>
    {prompt}
    <Spring
      from={{ number: 0 }}
      to={{ number: 100 }}
      delay={500}
      config={{ duration: 500 }}
    >
      {({ number }) => (
        <Highlighted width={`${number}%`}>{highlight}</Highlighted>
      )}
    </Spring>
    {promptEnd}
  </StyledPrompt>
);

Prompt.propTypes = {
  prompt: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  promptEnd: PropTypes.string,
};

Prompt.defaultProps = {
  promptEnd: '?',
};

export default Prompt;
