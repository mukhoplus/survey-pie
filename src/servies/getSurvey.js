import mainApi from './apis/mainInstance';

function getSurvey() {
  const surveyId = window.location.pathname.split('/')[2];
  return mainApi.get(`/surveys/${surveyId}`);
}

export default getSurvey;
