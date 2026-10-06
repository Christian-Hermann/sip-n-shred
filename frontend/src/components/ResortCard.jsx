import "./ResortCard.css";
import { getWeatherDescription } from "../utils/weather";

function ResortCard({ resort, weather }) {
  return (
    <article className="resort-card">
      <h3>{resort.name}</h3>

      {weather && (
        <div className="weather">
          <p>
            <strong>Current Temperature: </strong>
            <span>{weather.temperature_2m} °F</span>
          </p>

          <p>
            <strong>Conditions: </strong>
            <span>{getWeatherDescription(weather.weather_code)}</span>
          </p>
        </div>
      )}

      <div className="resort-details">
        <p>
          <strong>Difficulty:</strong>
          <span>{resort.difficulty}</span>
        </p>

        <p>
          <strong>Best For:</strong>
          <span>{resort.bestFor}</span>
        </p>

        <p>
          <strong>From SLC Airport:</strong>
          <span>{resort.driveFromAirport} min</span>
        </p>

        <p>
          <strong>Terrain Park:</strong>
          <span>{resort.hasTerrainPark ? "Yes" : "No"}</span>
        </p>

        <p>
          <strong>Après Rating:</strong>
          <span>{resort.apresRating}/10</span>
        </p>
      </div>
    </article>
  );
}

export default ResortCard;
