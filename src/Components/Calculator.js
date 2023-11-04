import React from 'react';
import { addition } from './CalculatorLogic';
import { substraction } from './CalculatorLogic';
import { multiplication } from './CalculatorLogic';
import { division } from './CalculatorLogic';

export default function Calcy() {
  return (

    <>
        <div id='asmd'>
            <button onClick={addition}>ADDITION</button>
            <button onClick={substraction}>SUBSTRACTION</button>
            <button onClick={multiplication}>MULTIPLICATION</button>
            <button onClick={division}>DIVISION</button>
        </div>
    </>
  )
}
