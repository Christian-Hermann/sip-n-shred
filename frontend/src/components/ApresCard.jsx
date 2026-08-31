import "./ApresCard.css";

function ApresCard({ apresSpot }) {
  return (
    <article className="apres-card">
      <div className="apres-card-header">
        <h3>{apresSpot.name}</h3>
      </div>
      <div className="apres-details">
        <p>
          <strong>Base Area:</strong>
          <span>{apresSpot.base_area}</span>
        </p>

        <p>
          <strong>Disatnce from Base:</strong>
          <span>{apresSpot.distance_from_base} </span>
          miles
        </p>

        <p>
          <strong>Price:</strong>
          <span>{apresSpot.price_range}</span>
        </p>

        <p>
          <strong>Vibe:</strong>
          <span>{apresSpot.vibe}</span>
        </p>

        <p>
          <strong>Rating:</strong>
          <span>{apresSpot.rating}/10</span>
        </p>
      </div>
    </article>
  );
}

export default ApresCard;
