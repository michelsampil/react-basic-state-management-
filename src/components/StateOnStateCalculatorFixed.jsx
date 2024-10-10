import { useState } from "react";

export const StateOnStateCalculatorFixed = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(a + b);

  const onClickHandler = (num) => {
    if (num === "A") {
      const updatedA = a + 1;
      setA(updatedA);
      setC(updatedA + b); //👈 not using the recently updated state value
    } else {
      const updatedB = b + 1;
      setB(updatedB);
      setC(a + updatedB); //👈 not using the recently updated state value
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

// 😎 The trick is that we aren't using the updated C value
// we are storing the value on a const which will be saved
// the value instantly and use that value to set C new state.
