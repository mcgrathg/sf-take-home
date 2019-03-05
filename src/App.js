import React, { Component } from 'react';
import './App.scss';

const OPTIONS = [
  'Arms',
  'Shoulders',
  'Back',
  'Cleavage',
  'Midsection',
  'Rear',
  'Legs',
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <p className="prompt">
          What do you like to <span className="highlighted">show off</span>?
        </p>
        <div className="options">
          {/* FIXME: options should be rendered inside this div */}
        </div>

        <div className="cta">
          <a className="cta__button">→</a>
        </div>
      </div>
    );
  }
}

export default App;
