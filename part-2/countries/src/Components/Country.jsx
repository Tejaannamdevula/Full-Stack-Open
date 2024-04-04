import React from "react";
import Weather from "./Weather";
const Country = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div> Flag </div>
      {/* <div style={{ fontSize: "8em" }}> {country.flag}</div> */}
      <img
        src={country.flags.png}
        alt={`${country.name.common}'s flag`}
        style={{ width: "100px" }}
      />
      <Weather country={country}></Weather>
    </>
  );
};

export default Country;
