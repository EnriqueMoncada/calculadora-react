import './App.css';
import Buttons from './components/Buttons.jsx';
import Screen from './components/Screen.jsx'
import ButtonClear from './components/ButtonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert('Ingrese datos para realizar calculo')
    }

  };

  return (
    <div className="App">
      <div className='container-calculator'>
        <Screen input={input} />
        <div className='row-buttons'>
          <Buttons handleClick={addInput}>1</Buttons>
          <Buttons handleClick={addInput}>2</Buttons>
          <Buttons handleClick={addInput}>3</Buttons>
          <Buttons handleClick={addInput}>+</Buttons>
        </div>
        <div className='row-buttons'>
          <Buttons handleClick={addInput}>4</Buttons>
          <Buttons handleClick={addInput}>5</Buttons>
          <Buttons handleClick={addInput}>6</Buttons>
          <Buttons handleClick={addInput}>-</Buttons>
        </div>
        <div className='row-buttons'>
          <Buttons handleClick={addInput}>7</Buttons>
          <Buttons handleClick={addInput}>8</Buttons>
          <Buttons handleClick={addInput}>9</Buttons>
          <Buttons handleClick={addInput}>*</Buttons>
        </div>
        <div className='row-buttons'>
          <Buttons handleClick={calculateResult} >=</Buttons>
          <Buttons handleClick={addInput}>0</Buttons>
          <Buttons handleClick={addInput}>.</Buttons>
          <Buttons handleClick={addInput}>/</Buttons>
        </div>
        <div className='row-buttons'>
          <ButtonClear handleClear={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
        <div className='row-buttons'>

        </div>
      </div>
    </div>
  );
}

export default App;
