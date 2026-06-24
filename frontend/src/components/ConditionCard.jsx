import "./ConditionCard.css";

function ConditionCard({ condition }) {
  return (
    <div className="condition-card">
      <h3>{condition.resort}</h3>
      <p>{condition.newSnow}" New Snow</p>

      <p>
        <strong>Difficulty: </strong>
        {condition.difficulty}
      </p>

      <p>
        <strong>Best For: </strong>
        {condition.bestFor}
      </p>

      <p>
        <strong>DriveTime: </strong>
        {condition.driveTime} min
      </p>

      <p>
        <strong>Après Rating: </strong>
        {condition.apresRating}/10
      </p>
    </div>
  );
}

export default ConditionCard;
