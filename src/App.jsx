import { useState } from "react";
import CalInput from "./components/CalInput";
import CalNumberBtn from "./components/CalNumberBtn";
import CalDeleteBtn from "./components/CalDeleteBtn";
import CalOperatorBtn from "./components/CalOperatorBtn";
import CalACBtn from "./components/CalACBtn";
import CalEnterBtn from "./components/CalEnterBtn";

const App = () => {
  const [result, setResult] = useState("0");
  // const [operandA, setOperandA] = useState();
  const [temp, setTemp] = useState();
  const [operator, setOperator] = useState();

  return (
    <main className="bg-pink-200 min-h-screen flex justify-center items-center">
      <div className="bg-gray-300 px-8 py-12 rounded-lg shadow-md">
        <CalInput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <CalACBtn
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
          />
          <CalDeleteBtn result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="%"
            bgColor="bg-orange-500 active:bg-orange-700"
          />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="/"
            bgColor="bg-pink-500 active:bg-pink-700"
          />
          <CalNumberBtn result={result} setResult={setResult} number="7" />
          <CalNumberBtn result={result} setResult={setResult} number="8" />
          <CalNumberBtn result={result} setResult={setResult} number="9" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="*"
            bgColor="bg-yellow-500 active:bg-yellow-700"
          />
          <CalNumberBtn result={result} setResult={setResult} number="4" />
          <CalNumberBtn result={result} setResult={setResult} number="5" />
          <CalNumberBtn result={result} setResult={setResult} number="6" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="-"
            bgColor="bg-blue-500 active:bg-blue-700"
          />
          <CalNumberBtn result={result} setResult={setResult} number="1" />
          <CalNumberBtn result={result} setResult={setResult} number="2" />
          <CalNumberBtn result={result} setResult={setResult} number="3" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="+"
            bgColor="bg-green-500 active:bg-green-700"
          />
          <CalNumberBtn
            result={result}
            setResult={setResult}
            number="0"
            width="w-36 col-span-2"
          />
          <CalNumberBtn result={result} setResult={setResult} number="." />
          <CalEnterBtn
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            operator={operator}
            setOperator={setOperator}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
