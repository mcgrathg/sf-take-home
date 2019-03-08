import { Component } from 'react';
import PropTypes from 'prop-types';

import { STAGES } from '../config/constants';
import StageSelectionHandler from './StageSelectionHandler';

const OPTIONS = [
  'Arms',
  'Shoulders',
  'Back',
  'Cleavage',
  'Midsection',
  'Rear',
  'Legs',
];

class OptionsHandler extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    selected: {},
    stageIndex: 0,
    stageSelections: {},
  };

  setSelectionsForStage = (selections = []) => {
    const { stageIndex, selected, stageSelections } = this.state;
    const currentStage = STAGES[stageIndex];
    const newSelections = selections.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: currentStage,
      }),
      {},
    );

    const selectionsForState = new Set(stageSelections[currentStage] || []);
    selections.forEach(selection => selectionsForState.add(selection));

    this.setState({
      stageIndex: stageIndex + 1,
      selected: { ...selected, ...newSelections },
      stageSelections: {
        ...stageSelections,
        ...{ [currentStage]: Array.from(selectionsForState) },
      },
    });
  };

  render() {
    const { children } = this.props;
    const { selected, stageIndex, stageSelections } = this.state;

    return children({
      stageName: STAGES[stageIndex],
      stageSelections,
      options: OPTIONS.filter(option => !selected[option]),
      onSubmit: this.setSelectionsForStage,
    });
  }
}

export default OptionsHandler;
