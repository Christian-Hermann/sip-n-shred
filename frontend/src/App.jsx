import "./App.css";
import resorts from "./data/resorts";
import ResortList from "./components/ResortList";
import ComparisonSection from "./components/ComparisonSection";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredResorts = resorts.filter((resort) =>
    resort.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="app">
      <header className="app-header">
        <h1>Sip n' Shred</h1>

        <p>Compare Utah ski resorts, conditions, and après-ski spots.</p>
      </header>

      <section>
        <h2>Today's Conditions</h2>
        <input
          type="text"
          placeholder="Search resorts..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <ResortList resorts={filteredResorts} />
      </section>

      <ComparisonSection resorts={resorts} />
    </main>
  );
}

export default App;
