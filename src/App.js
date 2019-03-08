import React from 'react';

import styled from 'styled-components';
import GlobalStyle from './config/global-style';
import { LOVE_STAGE, DOWNPLAY_STAGE } from './config/constants';
import OptionsHandler from './stage/OptionsHandler';
import LoveStage from './stage/LoveStage';
import DownplayStage from './stage/DownplayStage';

import 'sanitize.css';

const Container = styled.div`
  max-width: 40rem;
  margin: 4rem auto 0;
  text-align: center;
`;

const App = () => (
  <Container>
    <GlobalStyle />
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
  </Container>
);

export default App;
