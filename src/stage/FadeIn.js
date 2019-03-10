import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops.cjs';

const FadeIn = ({ children }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 500 }}
    >
      {props => <div style={props}>{children}</div>}
    </Spring>
  );
};

FadeIn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default FadeIn;
