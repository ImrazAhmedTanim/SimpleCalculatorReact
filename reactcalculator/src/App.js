import React,{useState,useRef} from 'react';
function App() {

  const useInput = useRef(null);
  const resultRef = useRef(null);
  const [result,setResult] = useState(0);
  const add = (e)=>{
    e.preventDefault();
    setResult((result)=>  result + Number(useInput.current.value));
  };
  const minus = (e)=>{
    e.preventDefault();
    const inputVal = useInput.current.value;
    setResult(result => result -Number(inputVal));
  
  };
  const multiply = (e)=>{
    e.preventDefault();
    const inputMul = useInput.current.value;
    setResult(result => result * Number(inputMul));
  };
  const divide = (e)=>{
    e.preventDefault();
    const inputDiv = useInput.current.value;
    setResult(result => result * Number(inputDiv));
  };
  const resetInput = (e)=> {
    e.preventDefault();
    useInput.current.value =0;

  };
  const resetResult = (e)=>{
    e.preventDefault();
    setResult(0);
  }
  return (
     <>
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div>
      <form> 
      <p ref={resultRef}>{result}</p> 
      <input 
        pattern="[0-9]" 
        ref={useInput} 
        type="number" 
        placeholder="Type a number" 
      /> 
      
      <button onClick={add}>add</button>
      <button onClick={minus}>substract</button>
      <button onClick={multiply}>multiply</button>
      <button onClick={divide}>divide</button>


      <button onClick={resetInput}>resetInput</button>
      <button onClick={resetResult}>resetResult</button>
      </form>
    </>

  );
}

export default App;
