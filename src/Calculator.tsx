import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value:any) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {  
 setInput(eval(input).toString());
    } catch (error) {
      setInput('');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="mb-4 text-2xl font-bold text-end">{input}</div>
      <div className="grid grid-cols-4 gap-2">
        <CalculatorButton label="clear" onClick={handleClear} />
        <CalculatorButton label="/" onClick={handleButtonClick} />
        <CalculatorButton label="*" onClick={handleButtonClick} />
        <CalculatorButton label="7" onClick={handleButtonClick} />
        <CalculatorButton label="8" onClick={handleButtonClick} />
        <CalculatorButton label="9" onClick={handleButtonClick} />
        <CalculatorButton label="-" onClick={handleButtonClick} />
        <CalculatorButton label="4" onClick={handleButtonClick} />
        <CalculatorButton label="5" onClick={handleButtonClick} />
        <CalculatorButton label="6" onClick={handleButtonClick} />
        <CalculatorButton label="+" onClick={handleButtonClick} />
        <CalculatorButton label="1" onClick={handleButtonClick} />
        <CalculatorButton label="2" onClick={handleButtonClick} />
        <CalculatorButton label="3" onClick={handleButtonClick} />
        <CalculatorButton label="." onClick={handleButtonClick} />
        <CalculatorButton label="0" onClick={handleButtonClick} />
      
        <button className=" p-2 rounded bg-blue-500 text-white font-bold col-span-4 " onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
