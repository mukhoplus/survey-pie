import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import postAnswers from '../../servies/postAnswers';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button from '../Button';

const ActionButtons = () => {
  const navigate = useNavigate();
  const step = useStep();
  const [isPosting, setIsPosting] = useState(false);

  const questionLength = useRecoilValue(questionsLengthState);
  const isLastStep = step === questionLength - 1;

  const surveyId = useSurveyId();
  const answers = useAnswers();

  const isRequired = useRequiredOption();
  const blockMoveToNext = isRequired ? !answers[step]?.length : false;

  return (
    <ActionButtonsWrapper>
      {step !== 0 && (
        <Button type="SECONDARY" onClick={() => navigate(`${step - 1}`)}>
          이전
        </Button>
      )}
      {!isLastStep ? (
        <Button
          type="PRIMARY"
          onClick={() => navigate(`${step + 1}`)}
          disabled={blockMoveToNext}
        >
          다음
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
              })
              .catch((err) => {
                console.log(err.response);
                alert('오류가 발생했습니다. 다시 시도해주세요.');
                setIsPosting(false);
              });
          }}
          disabled={isPosting || blockMoveToNext}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
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
