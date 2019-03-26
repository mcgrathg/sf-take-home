import React from 'react';
import Stage from './Stage';
import { DOWNPLAY_STAGE } from '../config/constants';

const DownplayStage = props => (
  <Stage
    stageName={DOWNPLAY_STAGE}
    prompt="Anything you'd like to "
    highlight="downplay"
    className="downplay"
    {...props}
  />
);

export default DownplayStage;
