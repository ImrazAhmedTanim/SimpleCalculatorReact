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
          <div className="p-4 mb-8 bg-gray-200">
      <h1 className="text-2xl font-bold">Simple Calculator</h1>

      <form className="mt-4">
        <p ref={resultRef} className="mb-2">
          Add Result: {result}
        </p>
        <p className="mb-4">Subtract Result: {subResult}</p>

        <input
          pattern="[0-9]"
          ref={firstInputRef}
          type="number"
          placeholder="Enter the first number"
          className="p-2 border mb-2"
        />
        <input
          pattern="[0-9]"
          ref={secondInputRef}
          disabled={!firstRender}
          type="number"
          placeholder="Enter the second number"
          className="p-2 border mb-2"
        />

        <button
          onClick={add}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out"
        >
          Add
        </button>
        <button
          onClick={subtract}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 mr-2 transition duration-300 ease-in-out"
        >
          Subtract
        </button>

        <button
          onClick={resetInputs}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 mr-2 transition duration-300 ease-in-out"
        >
          Reset Inputs
        </button>
        <button
          onClick={resetResult}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 transition duration-300 ease-in-out"
        >
          Reset Result
        </button>
      </form>
    </div>
    </>
  );
}

export default Doubleinput;



