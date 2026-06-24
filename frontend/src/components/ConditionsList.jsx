import ConditionCard from "./ConditionCard";

function ConditionsList({ conditions }) {
  return (
    <>
      {conditions.map((condition) => (
        <ConditionCard key={condition.id} condition={condition} />
      ))}
    </>
  );
}

export default ConditionsList;
