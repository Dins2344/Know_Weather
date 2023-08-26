import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoURL, getCities } from "../../api/cities";

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState("");
  const loadOptions = async (input) => {
    try {
      const response = await fetch(`${geoURL}?minPopulation=1000000&namePrefix=${input}`,getCities);
      const data = await response.json();
        return {
          options: data.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.countryCode}`,
            };
          }),
        }; 
        
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (searchData) => {
      setSearch(searchData);
      onSearchChange(searchData)
  };
  return (
    <>
      <AsyncPaginate
        placeholder="Search cities"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
