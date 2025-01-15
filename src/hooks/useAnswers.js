import { useRecoilValue } from 'recoil';

import answersState from '../stores/answers/atoms';

function useAnswers() {
  return useRecoilValue(answersState);
}

export default useAnswers;
