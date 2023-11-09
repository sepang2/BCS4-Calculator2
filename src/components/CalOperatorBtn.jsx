const CalOperatorBtn = ({
  result,
  setResult,
  setTemp,
  setOperator,
  inputOperator,
  bgColor,
}) => {
  const onClickOperator = () => {
    if (isNaN(result)) {
      alert("숫자를 입력하세요");
    } else {
      setResult("0");
      setTemp(result);
      setOperator(inputOperator);
    }
  };

  return (
    <button className={`btn-style ${bgColor}`} onClick={onClickOperator}>
      {inputOperator}
    </button>
  );
};

export default CalOperatorBtn;
