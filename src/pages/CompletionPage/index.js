import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import congrats from '../../assets/congrats.png';
import reload from '../../assets/reload.png';
import Button from '../../components/Button';
import useSurveyId from '../../hooks/useSurveyId';

const CompletionPage = () => {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageContainer>
      <img src={congrats} alt="" witdh="209" height="204" />
      <MidText>설문이 완료되었습니다.</MidText>
      <ReloadButton
        type="TERTIARY"
        onClick={() => navigate(`/survey/${surveyId}/0`)}
      >
        <img src={reload} alt="" width="24" height="24" />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageContainer>
  );
};

const CompletionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MidText = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export default CompletionPage;
