import ResortCard from "./ResortCard";

function ResortList({ resorts }) {
  return (
    <>
      {resorts.map((resort) => (
        <ResortCard key={resort.id} resort={resort} />
      ))}
    </>
  );
}

export default ResortList;
