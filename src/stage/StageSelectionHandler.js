import { Component } from 'react';
import PropTypes from 'prop-types';

class StageSelectionHandler extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  state = {
    selected: {},
  };

  onOptionToggled = (option = '', isToggled = true) => {
    const { selected } = this.state;

    this.updateSelectedState({ ...selected, [option]: isToggled });
  };

  resetSelections = () => {
    this.updateSelectedState({});
  };

  updateSelectedState = newSelectedState => {
    const { onChange } = this.props;

    this.setState({ selected: newSelectedState });

    if (onChange) {
      onChange(newSelectedState);
    }
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
