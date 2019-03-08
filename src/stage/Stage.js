import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import StageHandler from './StageSelectionHandler';
import Prompt from './Prompt';
import OptionToggles from './OptionToggles';
import SubmitSelectionsButton from './SubmitSelectionsButton';

const Stage = ({ onSubmit, options, prompt, highlight }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 500 }}
    >
      {props => (
        <div style={props}>
          <Prompt prompt={prompt} highlight={highlight} />

          <StageHandler>
            {({ onOptionToggled, selected, resetSelections }) => {
              return (
                <>
                  <OptionToggles
                    options={options}
                    onOptionToggled={onOptionToggled}
                    selected={selected}
                  />

                  <SubmitSelectionsButton
                    onClickHandler={() => {
                      onSubmit(Object.keys(selected));
                      resetSelections();
                    }}
                  />
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
};

export default Stage;
