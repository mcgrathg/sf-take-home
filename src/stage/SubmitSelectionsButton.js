import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../config/colors';

const StyledButton = styled.button`
  display: inline-block;
  min-width: 13rem;
  height: 3.25rem;
  border: 1px solid ${colors.watermelon};
  padding: 0.5rem 1rem;
  color: ${colors.watermelon};
  background-color: $white;
  transition: all 0.25s ease-in;

  @media (min-width: 500px) {
    padding: 1rem 1.5rem;
  }

  &:hover,
  &:focus {
    color: ${colors.white};
    background-color: ${colors.watermelon};
  }

  &:active {
    transform: scale(0.98);
    transition: none;
  }

  &:focus {
    box-shadow: 0 0 0 3px ${colors.greyLight}, 0 0 0 5px ${colors.watermelon};
  }
`;

const SubmitSelectionsButton = ({ onClickHandler, text }) => (
  <StyledButton type="button" onClick={onClickHandler}>
    {text}
  </StyledButton>
);

SubmitSelectionsButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
};

SubmitSelectionsButton.defaultProps = {
  text: '→',
};

export default SubmitSelectionsButton;
