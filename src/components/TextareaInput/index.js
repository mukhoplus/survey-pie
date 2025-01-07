const TextareaInput = ({ answer, setAnswer }) => {
  return (
    <textarea
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
};

export default TextareaInput;
