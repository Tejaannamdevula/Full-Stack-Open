const Display = ({ countries }) => {
  length = countries.length;
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
      console.log("hello", country);

      const languages = Object.values(country.languages);
      const flag = country.flag;
      return (
        <>
          <h1>{country.name.common}</h1>
          <div>capital {country.capital}</div>
          <div>area {country.area}</div>

          <h3>languages:</h3>

          <ul>
            {languages.map((language) => (
              <li>{language}</li>
            ))}
          </ul>
          <div> Flag </div>
          <div style={{ fontSize: "8em" }}> {country.flag}</div>
        </>
      );
    } else {
      return (
        <>
          {countries.map((country) => (
            <li>{country.name.common}</li>
          ))}
        </>
      );
    }
  } else {
    return <>countries.map()</>;
  }
};
export default Display;
