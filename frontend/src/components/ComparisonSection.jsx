import { useState } from "react";
import "./ComparisonSection.css";

function ComparisonSection({ resorts }) {
  const [firstResortId, setFirstResortId] = useState(1);
  const [secondResortId, setSecondResortId] = useState(2);

  const firstResort = resorts.find((resort) => resort.id === firstResortId);
  const secondResort = resorts.find((resort) => resort.id === secondResortId);

  return (
    <section>
      <h2>Compare Resorts</h2>
      <div className="comparison-selects">
        <select
          value={firstResortId}
          onChange={(event) => setFirstResortId(Number(event.target.value))}
        >
          {resorts.map((resort) => (
            <option key={resort.id} value={resort.id}>
              {resort.name}
            </option>
          ))}
        </select>
        <select
          value={secondResortId}
          onChange={(event) => setSecondResortId(Number(event.target.value))}
        >
          {resorts.map((resort) => (
            <option key={resort.id} value={resort.id}>
              {resort.name}
            </option>
          ))}
        </select>
      </div>

      <div className="comparison-results">
        <div className="comparison-header">
          <div></div>
          <h3>{firstResort.name}</h3>
          <h3>{secondResort.name}</h3>
        </div>

        <div className={"comparison-row"}>
          <strong>New Snow</strong>
          <span>{firstResort.newSnow}"</span>
          <span>{secondResort.newSnow}"</span>
        </div>

        <div className="comparison-row">
          <strong>Difficulty</strong>
          <span>{firstResort.difficulty}</span>
          <span>{secondResort.difficulty}</span>
        </div>

        <div className="comparison-row">
          <strong>Best For</strong>
          <span>{firstResort.bestFor}</span>
          <span>{secondResort.bestFor}</span>
        </div>

        <div className="comparison-row">
          <strong>Terrain Park</strong>
          <span>{firstResort.hasTerrainPark ? "Yes" : "No"}</span>
          <span>{secondResort.hasTerrainPark ? "Yes" : "No"}</span>
        </div>

        <div className="comparison-row">
          <strong>From SLC Airport</strong>
          <span>{firstResort.driveFromAirport} min</span>
          <span>{secondResort.driveFromAirport} min</span>
        </div>

        <div className="comparison-row">
          <strong>Après Rating</strong>
          <span>{firstResort.apresRating}/10</span>
          <span>{secondResort.apresRating}/10</span>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
