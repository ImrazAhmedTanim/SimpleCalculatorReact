import {useState,useRef} from 'react';

export default function Doubleinput2() {
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const resultRef = useRef(null);
    const [mulResult, setMulResult] = useState(1); // Initialize with 1 for multiplication
    const [divResult,setDivResult] = useState(1);
    const [divRender,setDivRender]  =useState(true);
    const multiply = (e) => {
        e.preventDefault();
        const firstValue = Number(firstInputRef.current.value);
        const secondValue = Number(secondInputRef.current.value);
        setMulResult((prevMulResult) => prevMulResult * firstValue * secondValue);
    
        
      };
    
      const divide = (e) => {
        e.preventDefault();
        const firstValue = Number(firstInputRef.current.value);
        const secondValue = Number(secondInputRef.current.value);
        if(divRender){
        setDivResult(() => ((firstValue / secondValue)   ));
        setDivRender(false);
        }
        else{
          setDivResult((prevDivResult) => ((prevDivResult / firstValue)   ));

        }
      };
    
      const resetInputs = (e) => {
        e.preventDefault();
        firstInputRef.current.value = 0;
        secondInputRef.current.value = 0;
      };
      const resetResult = (e) => {
        e.preventDefault();
        setMulResult(1);
        setDivResult(1);
        setDivRender(true);
      };
    
  return (
<>

<div>
  <h1>Simple Calculator</h1>
</div>
<form>
  <p ref={resultRef}>Multiply Result: {mulResult}</p>
  <p>Division Result: {divResult}</p>

  <input
    pattern="[0-9]"
    ref={firstInputRef}
    type="number"
    placeholder="Enter the first number"
  />
  <input
    pattern="[0-9]"
    ref={secondInputRef}
    disabled={!divRender} 

    type="number"
    placeholder="Enter the second number"
  />

<button onClick={multiply}>Multiply</button>
<button onClick={divide}>Divide</button>
 
  <button onClick={resetInputs}>Reset Inputs</button>
  <button onClick={resetResult}>Reset Result</button>
</form>

</>

  
  );
}
