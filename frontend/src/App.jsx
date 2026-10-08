import "./App.css";
import ApresList from "./components/ApresList";
import ResortList from "./components/ResortList";
import ComparisonSection from "./components/ComparisonSection";
import { useEffect, useState } from "react";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [resorts, setResorts] = useState([]);
  const [apresSpots, setApresSpots] = useState([]);
  const [selectedApresResortId, setSelectedApresResortId] = useState(1);
  const [weatherByResort, setWeatherByResort] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("all");
  const [resortError, setResortError] = useState("");

  useEffect(() => {
    async function fetchResorts() {
      try {
        const response = await fetch(`${API_URL}/resorts`);

        if (!response.ok) {
          throw new Error("Failed to fetch resorts");
        }

        const data = await response.json();
        setResorts(data);
      } catch (error) {
        console.log(error);
        setResortError("Unable to load resort data.");
      }
    }
    fetchResorts();
  }, []);

  useEffect(() => {
    async function fetchApresSpots() {
      const response = await fetch(
        `${API_URL}/resorts/${selectedApresResortId}/apres`
      );

      const data = await response.json();

      setApresSpots(data);
    }

    fetchApresSpots();
  }, [selectedApresResortId]);

  useEffect(() => {
    async function fetchWeather() {
      const weatherData = {};

      for (const resort of resorts) {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${resort.latitude}&longitude=${resort.longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`
        );

        const data = await response.json();

        weatherData[resort.id] = data.current;
      }

      setWeatherByResort(weatherData);
    }

    fetchWeather();
  }, [resorts]);

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
          Mountain conditions. Great après. One place to plan both.
        </p>

        <p className="app-description">
          Compare Utah resorts, live weather, and après-ski spots. Inspired by
          15 years of trips to Utah's mountains.
        </p>
      </header>

      <nav className="main-nav">
        <a href="#conditions">Conditions</a>
        <a href="#comparison">Compare Resorts</a>
        <a href="#apres">Après</a>
      </nav>

      <section id="conditions" className="conditions-section">
        <h2>Today's Conditions</h2>

        {resortError && <p className="error-message">{resortError}</p>}

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
            <option value="airport">Closest to Airport</option>
            <option value="alphabetical">A – Z</option>
          </select>
        </div>

        <ResortList resorts={sortedResorts} weatherByResort={weatherByResort} />
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
