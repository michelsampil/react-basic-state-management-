import "./App.css";
import { ReducerCalculator } from "./components/ReducerCalculator";
import { StateCalculatorDefault } from "./components/StateCalculator";
import { StateEffectCalculator } from "./components/StateEffectCalculator";
import { ReducerPayloadCalculator } from "./components/ReducerPayloadCalculator";
import { StateOnStateCalculator } from "./components/StateOnStateCalculator";
import { NonStateCalculator } from "./components/NonStatateCalculator";
import { StateOnStateCalculatorFixed } from "./components/StateOnStateCalculatorFixed";
import { TwoStatesCalculator } from "./components/TwoStateCalculator";

function App() {
  return (
    <div className="card">
      <h2>Non State Calculator</h2>
      <NonStateCalculator />
      <h2>State Calculator Default</h2>
      <StateCalculatorDefault />
      <h2> Two States calculator</h2>
      <TwoStatesCalculator />
      <h2> State on State</h2>
      <StateOnStateCalculator />
      <h2> State on State fixed </h2>
      <StateOnStateCalculatorFixed />
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
