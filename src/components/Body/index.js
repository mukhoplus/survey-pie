import SelectInput from '../SelectInput';
import TextareaInput from '../TextareaInput';
import TextInput from '../TextInput';

const Body = ({ type, answer, setAnswer }) => {
  let InputComponent = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextareaInput;
  }

  return <InputComponent answer={answer} setAnswer={setAnswer} />;
};

export default Body;
