import { useState } from "react";

export const StateCalculatorDefault = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(a + b);

  const onClickHandler = (num) => {
    if (num === "A") {
      setA(updatedA);
    } else {
      setB(updatedB);
    }
  };

  return (
    <div className="App">
      {a} + {b} = {c}
      <button onClick={() => onClickHandler("A")}> ➕ A </button>
      <button onClick={() => onClickHandler("B")}> ➕ B </button>
    </div>
  );
};

// 🤨 Wondering why it didn't work?
// This component is not displaying updates in C because default state
// values are assigned on the first render
