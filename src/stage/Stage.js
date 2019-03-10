import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from './FadeIn';
import StageHandler from './StageSelectionHandler';
import Prompt from './Prompt';
import OptionToggles from './OptionToggles';
import SubmitSelectionsButton from './SubmitSelectionsButton';

const Stage = ({ onSubmit, options, prompt, highlight }) => (
  <FadeIn>
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
  </FadeIn>
);

Stage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prompt: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default Stage;
