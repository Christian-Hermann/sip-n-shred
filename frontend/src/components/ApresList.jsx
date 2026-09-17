import ApresCard from "./ApresCard";

function ApresList({
  apresSpots,
  resorts,
  selectedApresResortId,
  setSelectedApresResortId,
}) {
  return (
    <section className="apres-section">
      <h2>Après Spots</h2>

      <select
        className="apres-select"
        value={selectedApresResortId}
        onChange={(event) =>
          setSelectedApresResortId(Number(event.target.value))
        }
      >
        {resorts.map((resort) => (
          <option key={resort.id} value={resort.id}>
            {resort.name}
          </option>
        ))}
      </select>

      {apresSpots.map((apresSpot) => (
        <ApresCard key={apresSpot.id} apresSpot={apresSpot} />
      ))}
    </section>
  );
}

export default ApresList;
