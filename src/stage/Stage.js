import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from './FadeIn';
import StageSelectionHandler from './StageSelectionHandler';
import Prompt from './Prompt';
import OptionToggles from './OptionToggles';
import SubmitSelectionsButton from './SubmitSelectionsButton';

const getSelectedNames = selected =>
  Object.entries(selected).reduce((acc, [key, value]) => {
    if (value) {
      acc.push(key);
    }
    return acc;
  }, []);

const Stage = ({
  stageName,
  onSubmit,
  onSelectionsChange,
  options,
  prompt,
  highlight,
  className,
}) => (
  <FadeIn>
    <Prompt prompt={prompt} highlight={highlight} />

    <StageSelectionHandler
      onChange={selected => {
        onSelectionsChange(stageName, getSelectedNames(selected));
      }}
    >
      {({ onOptionToggled, selected, resetSelections }) => {
        return (
          <>
            <OptionToggles
              options={options}
              onOptionToggled={onOptionToggled}
              selected={selected}
              className={className}
            />

            <SubmitSelectionsButton
              onClickHandler={() => {
                onSubmit(getSelectedNames(selected));
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
  className: PropTypes.string,
  stageName: PropTypes.string,
  onSelectionsChange: PropTypes.func,
};

Stage.defaultProps = {
  className: '',
  stageName: '',
  onSelectionsChange: () => {},
};

export default Stage;
