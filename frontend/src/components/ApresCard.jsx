function ApresCard({ apresSpot }) {
  return (
    <article>
      <h3>{apresSpot.name}</h3>

      <p>
        <strong>Base Area:</strong> {apresSpot.base_area}
      </p>

      <p>
        <strong>Disatnce from Base:</strong> {apresSpot.distance_from_base}{" "}
        miles
      </p>

      <p>
        <strong>Price:</strong> {apresSpot.price_range}
      </p>

      <p>
        <strong>Vibe:</strong> {apresSpot.vibe}
      </p>

      <p>
        <strong>Rating:</strong>
        {apresSpot.rating}/10
      </p>
    </article>
  );
}

export default ApresCard;
