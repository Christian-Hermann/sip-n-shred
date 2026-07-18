import "./App.css";
import resorts from "./data/resorts";
import ResortList from "./components/ResortList";
import ComparisonSection from "./components/ComparisonSection";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  const filteredResorts = resorts.filter((resort) => {
    const matchesSearch = resort.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterOption === "all" ||
      (filterOption === "terrainPark" && resort.hasTerrainPark) ||
      resort.difficulty.toLowerCase() === filterOption;

    return matchesSearch && matchesFilter;
  });

  const sortedResorts = [...filteredResorts];
  if (sortOption === "snow") {
    sortedResorts.sort((a, b) => b.newSnow - a.newSnow);
  }
  if (sortOption === "airport") {
    sortedResorts.sort((a, b) => a.driveFromAirport - b.driveFromAirport);
  }
  if (sortOption === "alphabetical") {
    sortedResorts.sort((a, b) => a.name.localeCompare(b.name));
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

      <section className="conditions-section">
        <h2>Today's Conditions</h2>

        <div className="resort-controls">
          <input
            type="text"
            placeholder="Search resorts..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={filterOption}
            onChange={(event) => setFilterOption(event.target.value)}
          >
            <option value="all">All Resorts</option>
            <option value="terrainPark">Terrain Parks Only</option>
            <option value="beginner">Beginner Friendly</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>

          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="">Default Order</option>
            <option value="snow">Most New Snow</option>
            <option value="airport">Closest to Airport</option>
            <option value="alphabetical">A – Z</option>
          </select>
        </div>

        <ResortList resorts={sortedResorts} />
      </section>

      <ComparisonSection resorts={resorts} />
    </main>
  );
}

export default App;
