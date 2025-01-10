import { useNavigate } from 'react-router-dom';

import Button from '../Button';

const ActionButtons = ({ questionLength, step }) => {
  const navigate = useNavigate();
  const isLastStep = step === questionLength - 1;

  return (
    <div>
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
    </div>
  );
};

export default ActionButtons;
