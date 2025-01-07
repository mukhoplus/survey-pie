import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

const QuestionBox = ({
  question,
  questionLength,
  step,
  setStep,
  answer,
  setAnswer,
}) => {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body type={question.type} answer={answer} setAnswer={setAnswer} />
      <ActionButtons
        questionLength={questionLength}
        step={step}
        setStep={setStep}
      />
    </div>
  );
};

export default QuestionBox;
