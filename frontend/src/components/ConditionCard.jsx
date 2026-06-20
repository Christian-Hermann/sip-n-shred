function ConditionCard({ condition }) {
  return (
    <div>
      <h3>{condition.resort}</h3>
      <p>{condition.newSnow}" New Snow</p>
    </div>
  );
}

export default ConditionCard;
