import { useState } from "react";
import "./ComparisonSection.css";
import ComparisonRow from "./ComparisonRow";

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

        <ComparisonRow
          label="New Snow"
          firstValue={`${firstResort.newSnow}"`}
          secondValue={`${secondResort.newSnow}"`}
        />

        <ComparisonRow
          label="Difficulty"
          firstValue={firstResort.difficulty}
          secondValue={secondResort.difficulty}
        />

        <ComparisonRow
          label="Best For"
          firstValue={firstResort.bestFor}
          secondValue={secondResort.bestFor}
        />

        <ComparisonRow
          label="Terrain Park"
          firstValue={firstResort.hasTerrainPark ? "Yes" : "No"}
          secondValue={secondResort.hasTerrainPark ? "Yes" : "No"}
        />

        <ComparisonRow
          label="From SLC Airport"
          firstValue={firstResort.driveFromAirport}
          secondValue={secondResort.driveFromAirport}
        />

        <ComparisonRow
          label="Après Rating"
          firstValue={`${firstResort.apresRating}/10`}
          secondValue={`${secondResort.apresRating}/10`}
        />
      </div>
    </section>
  );
}

export default ComparisonSection;
