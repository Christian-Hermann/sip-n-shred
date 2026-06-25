function ComparisonSection({ conditions }) {
  return (
    <sections>
      <h2>Compare Resorts</h2>

      <div>
        {conditions.map((condition) => (
          <div key={condition.id}>
            <h3>{condition.resort}</h3>
            <p>{condition.newSnow}" New Snow</p>
            <p>Difficulty: {condition.difficulty}</p>
            <p>Best For: {condition.bestFor}</p>
            <p>From SLC Airport: {condition.driveFromAirport} min</p>
            <p>Après Rating: {condition.apresRating}/10</p>
          </div>
        ))}
      </div>
    </sections>
  );
}

export default ComparisonSection;
