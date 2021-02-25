import React from "react";

function FilterComponent({ filter, setFilter }) {
  return (
    <span className="filter">
      Search: {"  "}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}

export default FilterComponent;
