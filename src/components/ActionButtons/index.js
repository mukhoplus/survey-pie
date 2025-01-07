import { useNavigate } from 'react-router-dom';

const ActionButtons = ({ questionLength, step }) => {
  const navigate = useNavigate();
  const isLastStep = step === questionLength - 1;

  return (
    <div>
      {step !== 0 && (
        <button onClick={() => navigate(`${step - 1}`)}>이전</button>
      )}
      {!isLastStep ? (
        <button onClick={() => navigate(`${step + 1}`)}>다음</button>
      ) : (
        <button onClick={() => navigate(`/done`)}>제출</button>
      )}
    </div>
  );
};

export default ActionButtons;
