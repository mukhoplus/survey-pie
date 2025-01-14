import { selector } from 'recoil';

import testState from './atom';

const testWithComma = selector({
  key: 'testWithComma',
  get: ({ get }) => {
    const text = get(testState);

    return text.join(',');
  },
});

export default testWithComma;
