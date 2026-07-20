import "./ResortCard.css";

function ResortCard({ resort }) {
  return (
    <article className="resort-card">
      <h3>{resort.name}</h3>

      <p className="snow-total">
        <span>{resort.newSnow}"</span>
        New Snow
      </p>

      <div className="resort-details">
        <p>
          <strong>Difficulty:</strong>
          <span>{resort.difficulty}</span>
        </p>

        <p>
          <strong>Best For:</strong>
          <span>{resort.bestFor}</span>
        </p>

        <p>
          <strong>From SLC Airport:</strong>
          <span>{resort.driveFromAirport} min</span>
        </p>

        <p>
          <strong>Terrain Park:</strong>
          <span>{resort.hasTerrainPark ? "Open Today" : "Closed Today"}</span>
        </p>

        <p>
          <strong>Après Rating:</strong>
          <span>{resort.apresRating}/10</span>
        </p>
      </div>
    </article>
  );
}

export default ResortCard;
