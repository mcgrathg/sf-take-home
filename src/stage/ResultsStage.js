import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FadeIn from './FadeIn';
import Prompt from './Prompt';

const Category = styled.div`
  padding-bottom: 2rem;
`;

const Selections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Selection = styled.span`
  margin: 0 1rem 1rem 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.7px;
`;

const ResultsStage = ({ showOff, downplay, comfortable }) => {
  return (
    <FadeIn>
      <Category data-testid="show-off-results">
        <Prompt prompt="You're " highlight="Showing Off" promptEnd=":" />
        <Selections>
          {showOff.map(text => (
            <Selection key={text}>{text}</Selection>
          ))}
        </Selections>
      </Category>
      <Category data-testid="downplay-results">
        <Prompt prompt="We'll " highlight="Downplay" promptEnd=":" />
        <Selections>
          {downplay.map(text => (
            <Selection key={text}>{text}</Selection>
          ))}
        </Selections>
      </Category>
      <Category data-testid="other-results">
        <Prompt prompt="You're comfortable about" promptEnd=":" />
        <Selections>
          {comfortable.map(text => (
            <Selection key={text}>{text}</Selection>
          ))}
        </Selections>
      </Category>
    </FadeIn>
  );
};

ResultsStage.propTypes = {
  showOff: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  downplay: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  comfortable: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ResultsStage;
