import "./App.css";
import conditions from "./data/conditions";
import ConditionCard from "./components/ConditionCard";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Sip n' Shred</h1>

        <p>Compare Utah ski resorts, conditions, and après-ski spots.</p>
      </header>

      <section>
        <h2>Today's Conditions</h2>

        {conditions.map((condition) => (
          <ConditionCard key={condition.id} condition={condition} />
        ))}
      </section>
    </main>
  );
}

export default App;
