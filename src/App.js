import React from 'react';
import 'sanitize.css';
import './App.scss';
import OptionsHandler from './OptionsHandler';
import LoveStage from './LoveStage';
import DownplayStage from './DownplayStage';
import { LOVE_STAGE, DOWNPLAY_STAGE } from './constants';

const App = () => {
  return (
    <div className="container">
      <OptionsHandler>
        {({ stageName, selectedOptions, stageProps }) => {
          if (stageName === LOVE_STAGE) {
            return <LoveStage {...stageProps} />;
          }

          if (stageName === DOWNPLAY_STAGE) {
            return <DownplayStage {...stageProps} />;
          }

          return (
            <>
              <h1>Results</h1>
              <pre>
                <code>{JSON.stringify(selectedOptions, null, 2)}</code>
              </pre>
            </>
          );
        }}
      </OptionsHandler>
    </div>
  );
};

export default App;
