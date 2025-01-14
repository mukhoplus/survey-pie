import { selector } from 'recoil';

import questionsState from './atoms';

const questionsLength = selector({
  key: 'questionsLengthState',
  get: ({ get }) => {
    const questions = get(questionsState);

    return questions.length;
  },
});

export default questionsLength;
