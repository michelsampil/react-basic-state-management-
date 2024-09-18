import { useReducer, useRef } from "react";
// a reducer is a function that let us centralize all the states changes
// processing dispatched actions 👇
export const ReducerPayloadCalculator = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENTS_A":
        // it's important to compose the new state adding the change at
        // last due js object composition 👇. so {...state, [NEW-STATE-HERE]}
        return { ...state, a: action.payload };
      case "INCREMENTS_B":
        return { ...state, b: action.payload };
      default:
        throw Error("Unknown action.");
    }
  };

  const onClickHandler = (incrementedVar) => {
    const newValue = +inputNumberRef.current.value;
    // Actions can only have a type, but sometimes we need pass data
    // in these cases we can add a payload property  👇
    dispatch({ type: incrementedVar, payload: newValue });
  };
  const [state, dispatch] = useReducer(reducer, { a: 1, b: 2 });
  const { a, b } = state;
  const c = a + b;

  // useRef is a hook that let's us access to input current value without
  // the need of save it in a state every time.
  // As useState, we can set a 👇 initial value.
  const inputNumberRef = useRef(0);

  return (
    <div className="App">
      {a} + {b} = {c}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>New value</label>
        {/* It's required bind 👇 our reference here inside the ref prop */}
        <input ref={inputNumberRef} />
        <button onClick={() => onClickHandler("INCREMENTS_A")}> ➕ A </button>
        <button onClick={() => onClickHandler("INCREMENTS_B")}> ➕ B </button>
      </div>
    </div>
  );
};
