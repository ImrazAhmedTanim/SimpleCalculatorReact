import {useState,useRef} from 'react';



function App() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const resultRef = useRef(null);

  const [result, setResult] = useState(0);

  const add = (e) => {
    e.preventDefault();
    const firstValue = Number(firstInputRef.current.value);
    const secondValue = Number(secondInputRef.current.value);
    setResult(firstValue + secondValue);
  };

  const subtract = (e) => {
    e.preventDefault();
    const firstValue = Number(firstInputRef.current.value);
    const secondValue = Number(secondInputRef.current.value);
    setResult(firstValue - secondValue);
  };

  const multiply = (e) => {
    e.preventDefault();
    const firstValue = Number(firstInputRef.current.value);
    const secondValue = Number(secondInputRef.current.value);
    setResult(firstValue * secondValue);
  };

  const divide = (e) => {
    e.preventDefault();
    const firstValue = Number(firstInputRef.current.value);
    const secondValue = Number(secondInputRef.current.value);
    setResult(firstValue / secondValue);
  };

  const resetInputs = (e) => {
    e.preventDefault();
    firstInputRef.current.value = '';
    secondInputRef.current.value = '';
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <>
      <div>
        <h1>Simple Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={firstInputRef}
          type="number"
          placeholder="Enter the first number"
        />
        <input
          pattern="[0-9]"
          ref={secondInputRef}
          type="number"
          placeholder="Enter the second number"
        />
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInputs}>Reset Inputs</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </>
  );
}

export default App;



