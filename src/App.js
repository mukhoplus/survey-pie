import './App.css';

import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <Routes>
      <Route path="/survey/:surveyId/:step" element={<SurveyPage />}>
        <Route path=":step" />
      </Route>
      <Route path="/done" element={<CompletionPage />} />
    </Routes>
  );
}

export default App;
