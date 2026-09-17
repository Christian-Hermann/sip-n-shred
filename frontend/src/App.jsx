import "./App.css";
import ApresList from "./components/ApresList";
import ResortList from "./components/ResortList";
import ComparisonSection from "./components/ComparisonSection";
import { useEffect, useState } from "react";

function App() {
  const [resorts, setResorts] = useState([]);
  const [apresSpots, setApresSpots] = useState([]);
  const [selectedApresResortId, setSelectedApresResortId] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    async function fetchResorts() {
      const response = await fetch("http://localhost:3000/resorts");

      const data = await response.json();

      setResorts(data);
    }

    fetchResorts();
  }, []);

  useEffect(() => {
    async function fetchApresSpots() {
      const response = await fetch(
        `http://localhost:3000/resorts/${selectedApresResortId}/apres`
      );

      const data = await response.json();

      setApresSpots(data);
    }

    fetchApresSpots();
  }, [selectedApresResortId]);

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

        <p className="app-description">
          Compare Utah resorts, fresh snow, and après-ski spots. Inspired by 15
          years of trips to Utah's mountains.
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
      <ApresList
        apresSpots={apresSpots}
        resorts={resorts}
        selectedApresResortId={selectedApresResortId}
        setSelectedApresResortId={setSelectedApresResortId}
      />
    </main>
  );
}

export default App;
