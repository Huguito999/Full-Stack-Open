import CountryDetails from "./countryDetails";
const CountryList = ({ countries, handleShow }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleShow(country.name.common)}>
              show
            </button>
          </li>
        ))}
      </ul>
    );
  }

  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />;
  }

  return <p>No matches</p>;
};

export default CountryList;
