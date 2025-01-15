import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../servies/postAnswers';
import questionsLengthState from '../../stores/survey/questionsLength';
import Button from '../Button';

const ActionButtons = () => {
  const navigate = useNavigate();
  const step = useStep();

  const questionLength = useRecoilValue(questionsLengthState);
  const isLastStep = step === questionLength - 1;

  const surveyId = useSurveyId();
  const answers = useAnswers();

  return (
    <ActionButtonsWrapper>
      {step !== 0 && (
        <Button type="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {!isLastStep ? (
        <Button type="PRIMARY" onClick={() => navigate(`${step + 1}`)}>
          다음
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            console.log(answers);
            postAnswers(surveyId, answers);
            navigate(`/done`);
          }}
        >
          제출
        </Button>
      )}
    </ActionButtonsWrapper>
  );
};

const ActionButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
