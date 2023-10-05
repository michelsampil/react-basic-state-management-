import { useReducer } from "react";

export const ReducerCalculator = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENTS_A":
        return { ...state, a: state.a++ };
      case "INCREMENTS_B":
        return { ...state, b: state.b++ };
      default:
        throw Error("Unknown action.");
    }
  };

  const onClickHandler = (incrementedVar) => {
    dispatch({ type: incrementedVar });
  };

  const [state, dispatch] = useReducer(reducer, { a: 1, b: 2 });
  const { a, b } = state;
  const c = a + b;

  return (
    <div className="App">
      {a} + {b} = {c}
      <button onClick={() => onClickHandler("INCREMENTS_A")}> ➕ A </button>
      <button onClick={() => onClickHandler("INCREMENTS_B")}> ➕ B </button>
    </div>
  );
};
