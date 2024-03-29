import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from './FadeIn';
import StageSelectionHandler from './StageSelectionHandler';
import Prompt from './Prompt';
import OptionToggles from './OptionToggles';
import SubmitSelectionsButton from './SubmitSelectionsButton';

const Stage = ({ onSubmit, options, prompt, highlight }) => (
  <FadeIn>
    <Prompt prompt={prompt} highlight={highlight} />

    <StageSelectionHandler>
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
                onSubmit(
                  Object.entries(selected).reduce((acc, [key, value]) => {
                    if (value) {
                      acc.push(key);
                    }
                    return acc;
                  }, []),
                );
                resetSelections();
              }}
            />
          </>
        );
      }}
    </StageSelectionHandler>
  </FadeIn>
);

Stage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  prompt: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default Stage;
