import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5105/weatherforecast")
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Weather Dashboard</h1>

      <div style={{ display: "grid", gap: "10px" }}>
        {weather.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <h3>{item.date}</h3>
            <p>
              🌡 Temp: {item.temperatureC}°C / {item.temperatureF}°F
            </p>
            <p>☁ Summary: {item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
