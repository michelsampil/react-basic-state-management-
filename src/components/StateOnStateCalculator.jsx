import { useState } from "react";

export const StateOnStateCalculator = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(a + b);

  const onClickHandler = (num) => {
    if (num === "A") {
      setA(a + 1); // Trying to update based on 'a'
      setC(a + b); // Updating 'c' immediately based on 'a' and 'b'
      // Note: 🔺Don't update states immediately based on another state update.
    } else {
      setB(b + 1);
      setC(a + b); // Same issue
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
//
// Note: The issue with this code arises because React state
// updates are asynchronous. When we update a or b using
// setA or setB, the new values are not immediately available
// in the subsequent lines of code. to see the fix please check
// the StateOnStateFixed component inside de component folder.
