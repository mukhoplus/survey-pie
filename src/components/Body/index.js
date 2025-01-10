import SelectInput from '../SelectInput';
import TextareaInput from '../TextareaInput';
import TextInput from '../TextInput';

const Body = ({ type, answer, setAnswer, options }) => {
  let InputComponent = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextareaInput;
  }

  return (
    <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
  );
};

export default Body;
