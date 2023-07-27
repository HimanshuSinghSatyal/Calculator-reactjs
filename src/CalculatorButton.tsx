import React from 'react';

const CalculatorButton = ({label, onClick }) => {
  return (
    <button className="p-2 rounded bg-blue-500 text-white font-bold" onClick={() => onClick(label)}>
      {label}
    </button>
  )};

export default CalculatorButton;
