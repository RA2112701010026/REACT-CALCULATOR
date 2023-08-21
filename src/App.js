import './App.css';
import Numbers from './components/Numbers'
import { useState } from 'react';
function App() {
    let[input,setInput]=useState("")
    function handleClick(value){
        setInput(input+value)
    }
    function handleClear(){
      let clear=("")
      setInput(clear);
    }
    function calculate (){
      // eslint-disable-next-line
      let outputval=eval(input)
      setInput(outputval)
    }
  return (
    <div className='background'>
    <div className='container'>
        <h1>CALCULATOR</h1>
         <div className='display'>
              <input type="text" value={input} className='Output'/>
              <Numbers handleClick={handleClick} handleClear={handleClear} calculate={calculate} /> 
        </div>
    </div>
    
    </div>
  );
}

export default App;
