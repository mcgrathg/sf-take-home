import { Component } from 'react';
import PropTypes from 'prop-types';

import { STAGES } from './constants';

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
  };

  setSelectionsForStage = (selections = []) => {
    const { stageIndex, selected } = this.state;
    const currentStage = STAGES[stageIndex];
    const newSelections = selections.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: currentStage,
      }),
      {},
    );

    this.setState({
      selected: { ...selected, ...newSelections },
      stageIndex: stageIndex + 1,
    });
  };

  render() {
    const { children } = this.props;
    const { selected, stageIndex } = this.state;

    return children({
      selectedOptions: selected,
      stageName: STAGES[stageIndex],
      stageProps: {
        options: OPTIONS.filter(option => !selected[option]),
        onSubmit: this.setSelectionsForStage,
      },
    });
  }
}

export default OptionsHandler;
