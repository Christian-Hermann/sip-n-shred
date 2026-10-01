import ResortCard from "./ResortCard";

function ResortList({ resorts, parkCityWeather }) {
  return (
    <>
      {resorts.map((resort) => (
        <ResortCard
          key={resort.id}
          resort={resort}
          weather={resort.id === 1 ? parkCityWeather : null}
        />
      ))}
    </>
  );
}

export default ResortList;
