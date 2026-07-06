import { useState } from "react";

function ComparisonSection({ resorts }) {
  const [selectedResortId, setSelectedResortId] = useState(1);
  const selectedResort = resorts.find(
    (resort) => resort.id === selectedResortId
  );

  return (
    <section>
      <h2>Compare Resorts</h2>

      <select
        value={selectedResortId}
        onChange={(event) => setSelectedResortId(Number(event.target.value))}
      >
        {resorts.map((resort) => (
          <option key={resort.id} value={resort.id}>
            {resort.name}
          </option>
        ))}
      </select>

      <div>
        <h3>{selectedResort.name}</h3>
        <p>{selectedResort.newSnow}" New Snow</p>
        <p>Difficulty: {selectedResort.difficulty}</p>
        <p>Best For: {selectedResort.bestFor}</p>
        <p>From SLC Airport: {selectedResort.driveFromAirport} min</p>
        <p>Après Rating: {selectedResort.apresRating}/10</p>
      </div>
    </section>
  );
}

export default ComparisonSection;
