export const NonStateCalculator = () => {
  let a = 1,
    b = 2,
    c = a + b;

  const onClickHandler = (num) => {
    if (num === "A") {
      a++;
    } else {
      b++;
    }
    c = a + b;
    console.log("C:", c);
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
// This component is not displaying updates because there are no changes
// in its props, parent component, or state. As a result, the current lifecycle never ends.
// This is an example of why you need to use state in React to ensure updates are reflected in the UI.
