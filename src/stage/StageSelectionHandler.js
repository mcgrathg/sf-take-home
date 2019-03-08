import { Component } from 'react';
import PropTypes from 'prop-types';

class StageSelectionHandler extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    selected: {},
  };

  onOptionToggled = (option = '', isToggled = true) => {
    this.setState(({ selected }) => ({
      selected: { ...selected, [option]: isToggled },
    }));
  };

  resetSelections = () => {
    this.setState({ selected: {} });
  };

  render() {
    const { children } = this.props;
    const { selected } = this.state;

    return children({
      onOptionToggled: this.onOptionToggled,
      resetSelections: this.resetSelections,
      selected,
    });
  }
}

export default StageSelectionHandler;
