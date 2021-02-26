import React from "react";

function FilterComponent({ filter, setFilter }) {
  return (
    <div className="filter">
      <span>
        <b>Global Search:</b>{" "}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </div>
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
