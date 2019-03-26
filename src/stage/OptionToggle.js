import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../config/colors';

const StyledToggle = styled.button`
  max-width: 11rem;
  margin: 0 0.25rem 0.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.greyBorder};
  border-radius: 1.5rem;
  background-color: ${colors.white};

  @media (min-width: 500px) {
    margin: 0 0.5rem 1rem;
    padding: 0.5rem 2rem;
  }

  &:focus,
  &.checked:focus:active {
    box-shadow: 0 0 0 2px ${colors.greyLight}, 0 0 0 3px ${colors.greyBorder};
  }

  &:active:focus,
  &.checked:focus {
    box-shadow: 0 0 0 2px ${colors.greyLight}, 0 0 0 3px ${colors.turquoise};
  }

  &:active {
    transform: scale(1.1);
    background-color: ${colors.turquoise};
    color: ${colors.white};
  }

  &.checked {
    border-color: ${colors.turquoise};
    color: ${colors.white};
    background-color: ${colors.turquoise};

    &:active {
      background-color: ${colors.white};
      color: inherit;
      border-color: ${colors.greyBorder};
    }

    &.show-off {
      transform: scale(1.05);
    }

    &.downplay {
      transform: scale(0.95);
    }
  }
`;

const OptionToggle = ({ option, isSelected, onToggled, className }) => (
  <StyledToggle
    key={option}
    type="button"
    aria-pressed={isSelected ? 'true' : 'false'}
    className={`option ${className} ${isSelected ? 'checked' : ''}`}
    onClick={() => {
      onToggled(option, !isSelected);
    }}
  >
    {option}
  </StyledToggle>
);

OptionToggle.propTypes = {
  option: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onToggled: PropTypes.func.isRequired,
  className: PropTypes.string,
};

OptionToggle.defaultProps = {
  className: '',
};

export default OptionToggle;
