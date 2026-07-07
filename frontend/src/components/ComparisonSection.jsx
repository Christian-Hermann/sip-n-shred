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
        <div>
          <h3>{firstResort.name}</h3>
          <p>{firstResort.newSnow}" New Snow</p>
          <p>Difficulty: {firstResort.difficulty}</p>
          <p>Best For: {firstResort.bestFor}</p>
          <p>From SLC Airport: {firstResort.driveFromAirport} min</p>
          <p>Après Rating: {firstResort.apresRating}/10</p>
        </div>
        <div>
          <h3>{secondResort.name}</h3>
          <p>{secondResort.newSnow}" New Snow</p>
          <p>Difficulty: {secondResort.difficulty}</p>
          <p>Best For: {secondResort.bestFor}</p>
          <p>From SLC Airport: {secondResort.driveFromAirport} min</p>
          <p>Après Rating: {secondResort.apresRating}/10</p>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
