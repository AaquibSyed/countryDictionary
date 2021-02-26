import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import { COLUMNS } from "./utils";
import "./TableComp.css";
import { ColumnFilterComponent, FilterComponent } from "./FilterComponent";

const TableComp = ({ countryData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => countryData, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilterComponent,
    };
  }, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    gotoPage,
    nextPage,
    pageCount,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { filter, pageIndex } = state;
  return (
    <>
      <FilterComponent filter={filter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header) => (
                <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                  {header.render("Header")}
                  <span>
                    {header.isSorted
                      ? header.isSortedDesc
                        ? " 🢃 "
                        : " 🡹 "
                      : ""}
                  </span>
                  <div className="column__filter">
                    {" "}
                    {header.canFilter ? header.render("Filter") : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pageOptions">
        <span>
          GOTO:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            max={pageOptions.length}
            onChange={(e) => {
              const pageNumber = Number(e.target.value);
              gotoPage(pageNumber - 1);
            }}
            style={{
              width: "4rem",
            }}
          />
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          Page <strong> {pageIndex + 1}</strong> of {pageOptions.length}{" "}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};
export default TableComp;
