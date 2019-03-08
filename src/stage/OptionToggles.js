import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OptionToggle from './OptionToggle';

const StyledOptions = styled.div`
  margin: 3rem 0;
`;

const OptionToggles = ({ options, selected, onOptionToggled }) => (
  <StyledOptions>
    {options.map(option => (
      <OptionToggle
        key={option}
        option={option}
        isSelected={Boolean(selected[option])}
        onToggled={onOptionToggled}
      />
    ))}
  </StyledOptions>
);

OptionToggles.propTypes = {
  onOptionToggled: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selected: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default OptionToggles;
