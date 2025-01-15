import mainApi from './apis/mainInstance';

async function postAnswers(surveyId, data) {
  return await mainApi.post('/answers', { surveyId, data });
}

export default postAnswers;
