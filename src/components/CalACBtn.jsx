const CalACBtn = ({ setResult, setTemp, setOperator }) => {
  const onClickAC = () => {
    setResult("0");
    setTemp();
    setOperator();
  };

  return (
    <button
      className="btn-style bg-red-500 active:bg-red-700"
      onClick={onClickAC}
    >
      AC
    </button>
  );
};

export default CalACBtn;
