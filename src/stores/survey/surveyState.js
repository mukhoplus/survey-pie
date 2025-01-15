import { atom, selector } from 'recoil';

import getSurvey from '../../servies/getSurvey';

const surveyAtom = atom({
  key: 'surveyAtom',
  default: {
    questions: [],
  },
});

const surveyState = selector({
  key: 'surveyState',
  get: async ({ get }) => {
    try {
      const res = await getSurvey();
      return res.data;
    } catch (error) {
      console.error('Failed to fetch survey:', error);
      return get(surveyAtom);
    }
  },
});

export default surveyState;
