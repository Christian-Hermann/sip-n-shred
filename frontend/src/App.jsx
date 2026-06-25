import "./App.css";
import conditions from "./data/conditions";
import ConditionsList from "./components/ConditionsList";
import ComparisonSection from "./components/ComparisonSection";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Sip n' Shred</h1>

        <p>Compare Utah ski resorts, conditions, and après-ski spots.</p>
      </header>

      <section>
        <h2>Today's Conditions</h2>

        <ConditionsList conditions={conditions} />
        <ComparisonSection conditions={conditions} />
      </section>
    </main>
  );
}

export default App;
