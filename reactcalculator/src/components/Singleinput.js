import React, { useState, useRef } from "react"; 

 
function Singleinput() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    // const inputVal = inputRef.current.value; 
    // const newResult = result + Number(inputVal); 
    // setResult(newResult); 
    setResult((result) => result + Number(inputRef.current.value)); 
  } 
 
  function minus(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result - Number(inputVal); 
    setResult(newResult); 
  } 
 
  function times(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result * Number(inputVal); 
    setResult(newResult); 
  } 
 
  function divide(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result / Number(inputVal); 
    setResult(newResult); 
  } 
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  } 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); 
  } 
 
  return ( 
    
      <div className="p-4 mb-8 bg-gray-200">
        <div>
          <h1 className="text-2xl font-bold">Simplest Working Calculator</h1>
        </div>
  
        <form className="mt-4">
          <p ref={resultRef} className="mb-2 text-xl font-bold">
            {result}
          </p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
            className="p-2 border mb-4"
          />
          <button onClick={plus} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out">
            Add
          </button>
          <button onClick={minus} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out">
            Subtract
          </button>
          <button onClick={times} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out">
            Multiply
          </button>
          <button onClick={divide} className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out">
            Divide
          </button>
          <button onClick={resetInput} className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 mr-2 transition duration-300 ease-in-out">
            Reset Input
          </button>
          <button onClick={resetResult} className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 transition duration-300 ease-in-out">
            Reset Result
          </button>
        </form>
      </div>
  ); 
} 
 
export default Singleinput;