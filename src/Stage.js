import React from 'react';
import PropTypes from 'prop-types';
import StageHandler from './StageSelectionHandler';

const Stage = ({ onSubmit, options, prompt }) => {
  return (
    <>
      <p className="prompt">{prompt}</p>

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
    </>
  );
};

Stage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prompt: PropTypes.node.isRequired,
};

export default Stage;
