import {useState,useRef} from 'react';



function Doubleinput() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const resultRef = useRef(null);

  const [result, setResult] = useState(0);
  const [subResult, setSubResult] = useState(0);
  const [firstRender, setFirstRender] = useState(true); // Flag to track the first render



  const add = (e) => {
    e.preventDefault();
    const firstValue = Number(firstInputRef.current.value);
    const secondValue = Number(secondInputRef.current.value);
    setResult((result)=>  result+firstValue + secondValue);
  };

  const subtract = (e) => {
    e.preventDefault();
    const firstValue = Number(firstInputRef.current.value);
    const secondValue = Number(secondInputRef.current.value);
    
    if (firstRender) {
      setSubResult(() => firstValue - secondValue);
      setFirstRender(false);
    }
    else{
      setSubResult((prevSubResult) => prevSubResult-firstValue );

    }
  };


  const resetInputs = (e) => {
    e.preventDefault();
    firstInputRef.current.value = 0;
    secondInputRef.current.value = 0;
  };


  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
    setSubResult(0);
    setFirstRender(true);

  };
 

  return (
    <>
      <div>
        <h1>Simple Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>Add Result: {result}</p>
        <p>Subtract Result: {subResult}</p>
        <input
          pattern="[0-9]"
          ref={firstInputRef}
          type="number"
          placeholder="Enter the first number"
        />
        <input
          pattern="[0-9]"
          ref={secondInputRef}
          disabled={!firstRender} 
          type="number"
          placeholder="Enter the second number"
        />
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
       
       
        <button onClick={resetInputs}>Reset Inputs</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    
    </>
  );
}

export default Doubleinput;



