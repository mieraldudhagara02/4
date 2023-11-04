import React from 'react';
import ReactDOM from 'react-dom/client';
import Calcu from '../src/Components/Calculator';
import '../src/Components/CalculatorLogic'
import '../src/calculator.css';

const root = ReactDOM.createRoot(document.getElementById("calc"));

root.render
(
    <Calcu />
)