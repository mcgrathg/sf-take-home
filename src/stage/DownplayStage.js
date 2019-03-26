import React from 'react';
import Stage from './Stage';

const DownplayStage = props => (
  <Stage
    prompt="Anything you'd like to "
    highlight="downplay"
    className="downplay"
    {...props}
  />
);

export default DownplayStage;
