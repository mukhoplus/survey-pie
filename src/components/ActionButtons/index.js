import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/questions/questionsLength';
import Button from '../Button';

const ActionButtons = () => {
  const navigate = useNavigate();
  const step = useStep();

  const questionLength = useRecoilValue(questionsLengthState);
  const isLastStep = step === questionLength - 1;

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
        <Button type="PRIMARY" onClick={() => navigate(`/done`)}>
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
