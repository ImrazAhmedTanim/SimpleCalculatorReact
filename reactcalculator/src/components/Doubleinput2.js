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

<div className="p-4 bg-gray-200">
  <h1 className="text-2xl font-bold">Simple Calculator</h1>

<form className="mt-4">
  <p ref={resultRef} className="mb-2">Multiply Result: {mulResult}</p>
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

<button onClick={multiply} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out" >Multiply</button>
<button onClick={divide} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out">Divide</button>
 
  <button onClick={resetInputs} className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 mr-2 transition duration-300 ease-in-out">Reset Inputs</button>
  <button onClick={resetResult} className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 mr-2 transition duration-300 ease-in-out">Reset Result</button>
</form>
</div>
</>

  
  );
}
