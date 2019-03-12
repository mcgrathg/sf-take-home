import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    width: 100%;
    content: '';
    background-color: ${colors.teal};
    z-index: -1;
    transition: all 0.5s;
    transform-origin: left top;
    transform: scale(0, 1);
  }

  &.animate::after {
    transform: scale(1, 1);
  }
`;

class Prompt extends Component {
  state = {
    animate: false,
  };

  isMounted = false;

  componentDidMount() {
    this.isMounted = true;

    setTimeout(() => {
      if (this.isMounted) {
        this.setState({ animate: true });
      }
    }, 500);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    const { prompt, highlight, promptEnd } = this.props;
    const { animate } = this.state;
    return (
      <StyledPrompt>
        {prompt}
        <Highlighted className={`${animate ? 'animate' : ''}`}>
          {highlight}
        </Highlighted>
        {promptEnd}
      </StyledPrompt>
    );
  }
}

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
