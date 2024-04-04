import React from "react";
import { useState } from "react";
import Country from "./Country";
import Weather from "./Weather";
const Display = ({ countries }) => {
  //for single selection
  // const [selctedCountry, setSelectedCountry] = useState(null);
  // for multiple selections
  const [selctedCountry, setSelectedCountry] = useState([]);
  const handleClick = (countryName) => {
    // setSelectedCountry(selctedCountry === countryName ? null : countryName);
    if (selctedCountry.includes(countryName)) {
      setSelectedCountry(
        selctedCountry.filter((country) => country !== countryName)
      );
    } else {
      setSelectedCountry([...selctedCountry, countryName]);
    }
  };
  const length = countries.length;
  if (length >= 10) {
    return (
      <>
        <p>Too many matches,specify another filter</p>
        <h1>{length}</h1>
      </>
    );
  } else if (length < 10) {
    if (length == 1) {
      const country = countries[0];
      return (
        <>
          <Country country={country}></Country>
          {/* <Weather country={country}></Weather> */}
        </>
      );
    } else {
      return (
        <>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleClick(country.name.common)}>
                {selctedCountry.includes(country.name.common) ? "hide" : "show"}
              </button>
              {selctedCountry.includes(country.name.common) && (
                <Country country={country}></Country>
              )}
            </li>
          ))}
        </>
      );
    }
  }
};
export default Display;
