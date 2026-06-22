import "./ConditionCard.css";

function ConditionCard({ condition }) {
  return (
    <div className="condition-card">
      <h3>{condition.resort}</h3>
      <p>{condition.newSnow}" New Snow</p>
    </div>
  );
}

export default ConditionCard;
