import { useState } from "react";

export const TwoStatesCalculator = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const c = a + b;

  const onClickHandler = (num) => {
    if (num === "A") {
      setA(a + 1);
    } else {
      setB(b + 1);
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
