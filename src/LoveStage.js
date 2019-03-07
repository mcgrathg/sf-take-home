import React from 'react';
import Stage from './Stage';

const LoveStage = props => (
  <Stage
    prompt={
      <>
        {'What do you like to '}
        <span className="highlighted">show off</span>?
      </>
    }
    {...props}
  />
);

export default LoveStage;
