import './App.css';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/survey/:surveyId/" element={<SurveyPage />}>
            <Route path=":step" />
          </Route>
          <Route path="/done" element={<CompletionPage />} />
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  height: 100vh; /* 100% of the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
`;

const Box = styled.div`
  background-color: #f0f0f0;
  width: 700px;
  min-height: 500px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  padding: 60px;
  display: flex;
`;

export default App;
