import "./App.css";
import { ReducerCalculator } from "./components/ReducerCalculator";
import { StateCalculator } from "./components/StateCalculator";
import { StateEffectCalculator } from "./components/StateEffectCalculator";
import { ReducerPayloadCalculator } from "./components/ReducerPayloadCalculator";
import { StateOnStateCalculator } from "./components/StateOnStateCalculator";

function App() {
  return (
    <div className="card">
      <h2>State Calculator</h2>
      <StateCalculator />
      <h2> State on State</h2>
      <StateOnStateCalculator />
      <h2>State/Effect Calculator</h2>
      <StateEffectCalculator />
      <h2>Reducer Calculator</h2>
      <ReducerCalculator />
      <h2>Reducer Payload Calculator</h2>
      <ReducerPayloadCalculator />
    </div>
  );
}

export default App;
