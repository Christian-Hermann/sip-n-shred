function ApresList({ apresSpots }) {
  return (
    <section>
      <h2>Park City Après Spots</h2>

      {apresSpots.map((spot) => (
        <p key={spot.id}>{spot.name}</p>
      ))}
    </section>
  );
}

export default ApresList;
