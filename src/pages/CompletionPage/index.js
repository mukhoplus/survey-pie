import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import testState from '../../stores/test/atom';
import testWithComma from '../../stores/test/testWithComma';

const CompletionPage = () => {
  const test = useRecoilValue(testState);
  const test2 = useRecoilValue(testWithComma);

  return (
    <CompletionPageContainer>
      {test} {test2}
    </CompletionPageContainer>
  );
};

const CompletionPageContainer = styled.div`
  background: aqua;
  padding: ${0 === 123 ? '4em' : '1em'};
`;

export default CompletionPage;
