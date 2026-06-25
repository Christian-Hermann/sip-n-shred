function ComparisonSection({ resorts }) {
  return (
    <section>
      <h2>Compare Resorts</h2>

      <div>
        {resorts.map((resort) => (
          <div key={resort.id}>
            <h3>{resort.name}</h3>
            <p>{resort.newSnow}" New Snow</p>
            <p>Difficulty: {resort.difficulty}</p>
            <p>Best For: {resort.bestFor}</p>
            <p>From SLC Airport: {resort.driveFromAirport} min</p>
            <p>Après Rating: {resort.apresRating}/10</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComparisonSection;
