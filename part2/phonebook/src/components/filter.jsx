import React from "react";

const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <label>Filter shown with: </label>
      <input value={filter} onChange={handleFilter} />
    </div>
  );
};

export default Filter;
