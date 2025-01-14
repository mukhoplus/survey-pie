import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';

const SurveyPage = () => {
  const step = Number(useParams().step);

  return (
    <SurveyPageWrapper className="App">
      <ProgressIndicator step={step} />
      <QuestionBox />
    </SurveyPageWrapper>
  );
};

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
