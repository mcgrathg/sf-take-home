import React from 'react';

import styled from 'styled-components';
import Loadable from 'react-loadable';
import GlobalStyle from './config/global-style';
import { SHOW_OFF_STAGE, DOWNPLAY_STAGE } from './config/constants';
import OptionsHandler from './stage/OptionsHandler';

const Survey = styled.main`
  max-width: 40rem;
  margin: 4rem auto 0;
  text-align: center;
`;

const Loading = () => <div>Loading...</div>;

const LoadableShowOffStage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "show-off-stage" */ './stage/ShowOffStage'),
  loading: Loading,
});

const LoadableDownplayStage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "downplay-stage" */ './stage/DownplayStage'),
  loading: Loading,
});

const LoadableResultsStage = Loadable({
  loader: () =>
    import(/* webpackChunkName: "results-stage" */ './stage/ResultsStage'),
  loading: Loading,
});

const App = () => (
  <Survey>
    <OptionsHandler>
      {({ stageName, stageSelections, options, onSubmit }) => {
        if (stageName === SHOW_OFF_STAGE) {
          return <LoadableShowOffStage options={options} onSubmit={onSubmit} />;
        }

        if (stageName === DOWNPLAY_STAGE) {
          return (
            <LoadableDownplayStage options={options} onSubmit={onSubmit} />
          );
        }

        const { showOff = [], downplay = [] } = stageSelections;
        return (
          <LoadableResultsStage
            showOff={showOff}
            downplay={downplay}
            comfortable={options}
          />
        );
      }}
    </OptionsHandler>
    <GlobalStyle />
  </Survey>
);

export default App;
