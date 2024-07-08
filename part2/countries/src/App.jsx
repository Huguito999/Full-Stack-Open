import React, { useState, useEffect } from "react";
import CountryList from "./components/countryList";
import CountryDetails from "./components/countryDetails";
import countriesService from "./services/countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleShow = (countryName) => {
    const country = countries.find((c) => c.name.common === countryName);
    setSelectedCountry(country);
  };
  return (
    <div>
      <h1>Country Information</h1>
      <div>
        Find countries: <input value={search} onChange={handleSearchChange} />
      </div>
      <CountryList countries={filteredCountries} handleShow={handleShow} />
      <CountryDetails country={selectedCountry} />
    </div>
  );
};

export default App;
