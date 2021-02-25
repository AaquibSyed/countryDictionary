import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./utils";
import "./TableComp.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessSharpIcon from "@material-ui/icons/ExpandLessSharp";

const TableComp = ({ countryData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => countryData, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((header) => (
              <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                {header.render("Header")}
                <span>
                  {header.isSorted ? (header.isSortedDesc ? " 🢃 " : " 🡹 ") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
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
  );
};
export default TableComp;
