import Keypad from './keypad';
import { useState } from 'react';
import './App.css';
function App(){
  const [input,setInput]=useState("");
  function handle(value){
      setInput(input+value);
  }
  function evaluate(){
      const result=eval(input);
      setInput(result);
  }
  function clear(){
      setInput("");
  }
      return (
           
            <div className='container'>
            <input type="text" value={input} className='output'/>
           
            <Keypad handle={handle} evaluate={evaluate} clear={clear}></Keypad>
            </div>
           
      )
}
export default App