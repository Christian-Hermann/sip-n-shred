import "./App.css";
import resorts from "./data/resorts";
import ResortList from "./components/ResortList";
import ComparisonSection from "./components/ComparisonSection";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredResorts = resorts.filter((resort) =>
    resort.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedResorts = [...filteredResorts];
  if (sortOption === "snow") {
    sortedResorts.sort((a, b) => b.newSnow - a.newSnow);
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Sip n' Shred</h1>

        <p className="app-tagline">
          Fresh powder. Great après. One place to plan both.
        </p>

        <p>
          Find the perfect Utah resort based on today's mountain conditions,
          then discover the best places to eat, drink, and unwind after the
          lifts close.
        </p>
      </header>

      <section>
        <h2>Today's Conditions</h2>
        <input
          type="text"
          placeholder="Search resorts..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          value={sortOption}
          onChange={(event) => setSortOption(event.target.value)}
        >
          <option value="">Defaul Order</option>
          <option value="snow">Most new snow</option>
        </select>

        <ResortList resorts={sortedResorts} />
      </section>

      <ComparisonSection resorts={resorts} />
    </main>
  );
}

export default App;
