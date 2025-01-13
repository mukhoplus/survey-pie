import styled from 'styled-components';

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
    <BodyWrapper>
      <InputComponent answer={answer} setAnswer={setAnswer} options={options} />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  margin: 0 38px;
  flex: 1;
`;

export default Body;
