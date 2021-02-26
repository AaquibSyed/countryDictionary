import { ColumnFilterComponent } from "./FilterComponent";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Capital",
    accessor: "capital",
  },
  {
    Header: "Population",
    accessor: "population",
    disableFilters: true,
  },

  {
    Header: "Region",
    accessor: "region",
  },
  {
    Header: "Subregion",
    accessor: "subregion",
  },
  {
    Header: "Timezone",
    accessor: "timezones[0]",
  },
  {
    Header: "Currrency",
    accessor: "currencies[0]",
  },
];
