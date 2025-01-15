import useCurrentQuestion from './useCurrentQuestion';

function useRequiredOption() {
  const question = useCurrentQuestion();
  return question.options.required || false;
}

export default useRequiredOption;
