const SelectInput = ({ answer, setAnswer }) => {
  return (
    <select
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    >
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  );
};

export default SelectInput;
