import './App.css';

import { useState } from 'react';

import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문2 입니다.',
      desc: '설명2 입니다.',
      type: 'select',
      required: false,
      options: {},
    },
    {
      title: '질문3 입니다.',
      desc: '설명3 입니다.',
      type: 'textarea',
      required: true,
      options: {},
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  return (
    <div className="App">
      <ProgressIndicator step={step} />
      <QuestionBox
        question={questions[step]}
        questionLength={questions.length}
        step={step}
        setStep={setStep}
        answer={answers[step]}
        setAnswer={(newAnswer) =>
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          })
        }
      />
    </div>
  );
}

export default App;
