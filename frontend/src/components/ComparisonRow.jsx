function ComparisonRow({ label, firstValue, secondValue }) {
  return (
    <div className="comparison-row">
      <strong>{label}</strong>
      <span>{firstValue}</span>
      <span>{secondValue}</span>
    </div>
  );
}

export default ComparisonRow;
