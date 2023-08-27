import "./App.css";
import Search from "./components/search/search";
import WeatherCard from "./components/weatherCard";
import { WeatherApiId, weatherApiURL } from "./api/cities";
import { useState } from "react";
import Forecast from "./components/forcast";
import SearchFor from "./components/searchFor";
import Spinning from "./components/spinning";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchChange = async (searchData) => {
    setIsLoading(true)
    const [lat, long] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${weatherApiURL}/weather?lat=${lat}&lon=${long}&appid=${WeatherApiId}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${weatherApiURL}/forecast?lat=${lat}&lon=${long}&appid=${WeatherApiId}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentWeatherData = await response[0].json();
        const forecastWeatherData = await response[1].json();
        setCurrentWeather({ ...currentWeatherData, city: searchData.label });
        setForecastWeather({ ...forecastWeatherData, city: searchData.label });
        setTimeout(() => setIsLoading(false),2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container xl:px-72 lg:px-60  md:px-28 px-4 min-h-screen">
        <Search onSearchChange={searchChange} />
        {isLoading ? (
          <Spinning loading = {isLoading} />
        ) : (
          <>
            {currentWeather ? (
              <WeatherCard data={currentWeather} />
            ) : (
              <SearchFor />
            )}
            {forecastWeather && <Forecast data={forecastWeather} />}
          </>
        )}
      </div>
    </>
  );
}

export default App;
