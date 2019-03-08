import React from 'react';

import styled from 'styled-components';
import GlobalStyle from './config/global-style';
import { SHOW_OFF_STAGE, DOWNPLAY_STAGE } from './config/constants';
import OptionsHandler from './stage/OptionsHandler';
import ShowOffStage from './stage/ShowOffStage';
import DownplayStage from './stage/DownplayStage';
import CompletedStage from './stage/CompletedStage';

const Container = styled.div`
  max-width: 40rem;
  margin: 4rem auto 0;
  text-align: center;
`;

const App = () => (
  <Container>
    <OptionsHandler>
      {({ stageName, stageSelections, options, onSubmit }) => {
        if (stageName === SHOW_OFF_STAGE) {
          return <ShowOffStage options={options} onSubmit={onSubmit} />;
        }

        if (stageName === DOWNPLAY_STAGE) {
          return <DownplayStage options={options} onSubmit={onSubmit} />;
        }

        const { showOff = [], downplay = [] } = stageSelections;
        return (
          <CompletedStage
            showOff={showOff}
            downplay={downplay}
            comfortable={options}
          />
        );
      }}
    </OptionsHandler>
    <GlobalStyle />
  </Container>
);

export default App;
