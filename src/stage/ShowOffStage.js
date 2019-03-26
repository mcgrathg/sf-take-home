import React from 'react';
import Stage from './Stage';
import { SHOW_OFF_STAGE } from '../config/constants';

const ShowOffStage = props => (
  <Stage
    stageName={SHOW_OFF_STAGE}
    prompt="What do you like to "
    highlight="show off"
    className="show-off"
    {...props}
  />
);

export default ShowOffStage;
