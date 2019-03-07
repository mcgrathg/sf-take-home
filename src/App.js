import React, { Component } from 'react';
import 'sanitize.css';
import './App.scss';
import { LOVE_STAGE, DOWNPLAY_STAGE } from './constants';
import OptionsHandler from './OptionsHandler';
import Stage from './Stage';

const App = () => {
  return (
    <div className="container">
      <OptionsHandler>
        {({ onSubmit, options, stageName, allSelections }) => {
          if (stageName === LOVE_STAGE) {
            return (
              <Stage
                prompt={
                  <>
                    {'What do you like to '}
                    <span className="highlighted">show off</span>?
                  </>
                }
                options={options}
                onSubmit={onSubmit}
              />
            );
          }

          if (stageName === DOWNPLAY_STAGE) {
            return (
              <Stage
                prompt={
                  <>
                    {"Anything you'd like to "}
                    <span className="highlighted">downplay</span>?
                  </>
                }
                options={options}
                onSubmit={onSubmit}
              />
            );
          }

          return (
            <>
              <h1>Results</h1>
              <pre>
                <code>{JSON.stringify(allSelections, null, 2)}</code>
              </pre>
            </>
          );
        }}
      </OptionsHandler>
    </div>
  );
};

export default App;
