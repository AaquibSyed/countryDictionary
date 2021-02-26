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

function ColumnFilterComponent({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <span className="filter__column">
      {" "}
      <input
        type="text"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
}
export { FilterComponent, ColumnFilterComponent };
