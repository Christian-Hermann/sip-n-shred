import ResortCard from "./ResortCard";

function ResortList({ resorts, weatherByResort }) {
  return (
    <>
      {resorts.map((resort) => (
        <ResortCard
          key={resort.id}
          resort={resort}
          weather={weatherByResort[resort.id]}
        />
      ))}
    </>
  );
}

export default ResortList;
