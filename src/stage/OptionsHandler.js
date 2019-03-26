import { Component } from 'react';
import PropTypes from 'prop-types';

import { STAGES, OPTIONS } from '../config/constants';

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

  changeSelectionsForStage = (stageName, selections = []) => {
    const { selected } = this.state;

    const newSelected = { ...selected };

    const changedStageIdx = STAGES.indexOf(stageName);

    selections.forEach(selection => {
      const existingSelectionStage = newSelected[selection];
      if (existingSelectionStage) {
        if (changedStageIdx < STAGES.indexOf(existingSelectionStage)) {
          newSelected[selection] = stageName;
        }
      } else {
        newSelected[selection] = stageName;
      }
    });

    const newStageSelections = Object.entries(newSelected).reduce(
      (acc, [feature, stage]) => {
        const values = acc[stage] || [];
        if (stage !== stageName || selections.includes(feature)) {
          values.push(feature);
        }
        acc[stage] = values;
        return acc;
      },
      {},
    );

    this.setState({
      selected: newSelected,
      stageSelections: newStageSelections,
    });
  };

  render() {
    const { children } = this.props;
    const { stageSelections } = this.state;

    return children({
      stageSelections,
      options: OPTIONS,
      onSubmit: this.setSelectionsForStage,
      onChange: this.changeSelectionsForStage,
    });
  }
}

export default OptionsHandler;
