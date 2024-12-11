import React, { useState } from "react";
import './index.css'
function Calculator() {
  
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState("");
    const handleClick = (value) => {
      if (value === "=") {
        try {
          const evalResult = eval(display);
          setResult(evalResult);
          setDisplay(evalResult.toString());
        } catch (error) {
          setResult("Error");
          setDisplay("");
        }
      } else if (value === "Clear") {
        setDisplay("");
        setResult("");
      } else {
        setDisplay(display + value);
      }
    };
 

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="screen">
        <input type="text" readOnly value={display} placeholder="0" />
        <input type="text" readOnly value={result} placeholder="Result" />
      </div>
      <div className="buttons-row">
        {["7", "8", "9", "/"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {["4", "5", "6", "*"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {["1", "2", "3", "-"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button
          onClick={() => {
            handleClick("0");
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            handleClick("+");
          }}
        >
          +
        </button>
        <button
          className="equals"
          onClick={() => {
            handleClick("=");
          }}
        >
          =
        </button>
        <button
          className="clear"
          onClick={() => {
            handleClick("Clear");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
export default Calculator;
