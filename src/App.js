import React from 'react';

import styled from 'styled-components';
import GlobalStyle from './config/global-style';
import OptionsHandler from './stage/OptionsHandler';
import ShowOffStage from './stage/ShowOffStage';
import DownplayStage from './stage/DownplayStage';
import ResultsStage from './stage/ResultsStage';

const Survey = styled.main`
  max-width: 40rem;
  margin: 4rem auto 0;
  text-align: center;
`;

const App = () => (
  <Survey>
    <OptionsHandler>
      {({ stageSelections = {}, options, onSubmit, onChange }) => {
        const { showOff = [], downplay = [] } = stageSelections;

        return (
          <>
            <ShowOffStage
              options={options}
              onSubmit={onSubmit}
              onSelectionsChange={onChange}
            />
            <DownplayStage
              options={options.filter(option => !showOff.includes(option))}
              onSubmit={onSubmit}
              onSelectionsChange={onChange}
            />
            <ResultsStage
              showOff={showOff}
              downplay={downplay}
              comfortable={options}
            />
          </>
        );
      }}
    </OptionsHandler>
    <GlobalStyle />
  </Survey>
);

export default App;
