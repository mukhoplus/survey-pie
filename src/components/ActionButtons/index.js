const ActionButtons = ({ questionLength, step, setStep }) => {
  const isLastStep = step === questionLength - 1;

  return (
    <div>
      {step !== 0 && <button onClick={() => setStep(step - 1)}>이전</button>}
      {!isLastStep && <button onClick={() => setStep(step + 1)}>다음</button>}
      {isLastStep && <button onClick={() => console.log('제출')}>제출</button>}
    </div>
  );
};

export default ActionButtons;
