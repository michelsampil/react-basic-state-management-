import { useState, useEffect } from "react";

export const StateEffectCalculator = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(a + b);

  useEffect(() => {
    setC(a + b); // 👈
  }, [a, b]); // Every time a or b updates the
  // function will be executed (setC(a+b))

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
