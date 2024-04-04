import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Filter from "./Components/Filter";
import countryService from "./Services/countries";
import Display from "./Components/Display";
function App() {
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log("search", search);
    // console.log(countries)
  };

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    console.log("effect run");
    countryService.getAll().then((data) => {
      setCountries(data);
    });
  }, []);
  useEffect(() => {
    if (search === "") {
      setFilteredCountries([]);
    } else {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, countries]);

  // if (!countries) {
  //   return null;
  // }
  return (
    <>
      <Filter value={search} onChange={handleChange}></Filter>
      {/* {console.log("mathced countries", filteredCountries)} */}
      <Display countries={filteredCountries}></Display>
    </>
  );
}

export default App;
