import mainApi from './apis/mainInstance';

function postAnswers(surveyId, data) {
  mainApi.post('/answers', { surveyId, data });
}

export default postAnswers;
