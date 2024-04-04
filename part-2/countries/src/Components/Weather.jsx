import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API;
  const { lat, lon } = country.latlng;
  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const apiResponse = response.data;
        // console.log(apiResponse);
        setWeather(apiResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiKey, country]);

  return (
    <>
      {weather && (
        <div>
          <h2>Weather in {country.name.common}</h2>
          <p>temperature: {weather.main.temp}Celcius</p>
          {/* <img src={weather.w} ></img> */}
          {/* <p>weather {weather.weather[0].id}</p> */}
          {weather.weather[0].icon && (
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather icon"
            />
          )}
          <p>wind {weather.wind.speed}</p>
        </div>
      )}
    </>
  );
};

export default Weather;
