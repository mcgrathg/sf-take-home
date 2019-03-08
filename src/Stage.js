import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import StageHandler from './StageSelectionHandler';

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

const Stage = ({ onSubmit, options, prompt, highlight, promptEnd }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 500 }}
    >
      {props => (
        <div style={props}>
          <p className="prompt">
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
          </p>

          <StageHandler>
            {({ onOptionToggled, selected, resetSelections }) => {
              const optionToggles = options.map(option => {
                const isSelected = selected[option];

                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={isSelected ? 'true' : 'false'}
                    className={`option ${isSelected ? 'checked' : ''}`}
                    onClick={() => onOptionToggled(option, !isSelected)}
                  >
                    {option}
                  </button>
                );
              });

              return (
                <>
                  <div className="options">{optionToggles}</div>
                  <button
                    className="cta"
                    type="button"
                    onClick={() => {
                      onSubmit(Object.keys(selected));
                      resetSelections();
                    }}
                  >
                    →
                  </button>
                </>
              );
            }}
          </StageHandler>
        </div>
      )}
    </Spring>
  );
};

Stage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prompt: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  promptEnd: PropTypes.string,
};

Stage.defaultProps = {
  promptEnd: '?',
};

export default Stage;
