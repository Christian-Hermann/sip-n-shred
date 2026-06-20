import "./App.css";
import conditions from "./data/conditions";

function App() {
  return (
    <>
      <h1>Sip n' Shred</h1>
      <p>Compare Utah ski resorts, conditions, and après-ski spots.</p>

      <h2>Today's Conditions</h2>

      {conditions.map((condition) => (
        <div key={condition.id}>
          <p>
            {condition.resort} - {condition.newSnow}" New Snow
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
