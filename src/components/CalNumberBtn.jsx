const CalNumberBtn = ({ result, setResult, number, width }) => {
  const onClickNumber = () => {
    result === "0" ? setResult(number) : setResult(result + number);
  };

  return (
    <button className={`btn-style ${width}`} onClick={onClickNumber}>
      {number}
    </button>
  );
};

export default CalNumberBtn;
