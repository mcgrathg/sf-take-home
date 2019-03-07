import React from 'react';
import Stage from './Stage';

const DownplayStage = props => (
  <Stage
    prompt={
      <>
        {"Anything you'd like to "}
        <span className="highlighted">downplay</span>?
      </>
    }
    {...props}
  />
);

export default DownplayStage;
