import "./App.css";
import resorts from "./data/resorts";
import ResortList from "./components/ResortList";
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
        <ResortList resorts={resorts} />
      </section>

      <ComparisonSection resorts={resorts} />
    </main>
  );
}

export default App;
