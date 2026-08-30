import ApresCard from "./ApresCard";

function ApresList({ apresSpots }) {
  return (
    <section>
      <h2>Après Spots</h2>

      {apresSpots.map((apresSpot) => (
        <ApresCard key={apresSpot.id} apresSpot={apresSpot} />
      ))}
    </section>
  );
}

export default ApresList;
