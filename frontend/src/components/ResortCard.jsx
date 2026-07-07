import "./ResortCard.css";

function ResortCard({ resort }) {
  return (
    <div className="resort-card">
      <h3>{resort.name}</h3>
      <p>{resort.newSnow}" New Snow</p>

      <p>
        <strong>Difficulty: </strong>
        {resort.difficulty}
      </p>

      <p>
        <strong>Best For: </strong>
        {resort.bestFor}
      </p>

      <p>
        <strong>From SLC Airport: </strong>
        {resort.driveFromAirport} min
      </p>

      <p>
        <strong>Terrain Park: </strong>
        {resort.hasTerrainPark ? "Open Today" : "Closed Today"}
      </p>

      <p>
        <strong>Après Rating: </strong>
        {resort.apresRating}/10
      </p>
    </div>
  );
}

export default ResortCard;
