const CalEnterBtn = ({
  result,
  setResult,
  temp,
  setTemp,
  operator,
  setOperator,
}) => {
  const onClickEnter = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(result) + Number(temp)));
        break;
      case "-":
        setResult(String(Number(temp) - Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(String(Number(temp) / Number(result)));
        // setResult(String(parseInt(Number(temp) / Number(result), 10))); // 나누기 소수점 없애기 (parseInt() 사용)
        break;
      case "%":
        setResult(String(Number(temp) % Number(result)));
        break;
    }

    setTemp("");
    setOperator("");
  };

  return (
    <button
      className="btn-style bg-cyan-500 active:bg-cyan-700"
      onClick={onClickEnter}
    >
      Enter
    </button>
  );
};

export default CalEnterBtn;
