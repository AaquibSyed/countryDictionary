import { ColumnFilterComponent } from "./FilterComponent";

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "name",
    Filter: ColumnFilterComponent,
  },
  {
    Header: "Capital",
    accessor: "capital",
    Filter: ColumnFilterComponent,
  },
  {
    Header: "Population",
    accessor: "population",
    Filter: ColumnFilterComponent,
    disableFilters: true,
  },

  {
    Header: "Region",
    accessor: "region",
    Filter: ColumnFilterComponent,
  },
  {
    Header: "Subregion",
    accessor: "subregion",
    Filter: ColumnFilterComponent,
  },
  {
    Header: "Timezone",
    accessor: "timezones[0]",
    Filter: ColumnFilterComponent,
  },
  {
    Header: "Currrency",
    accessor: "currencies[0]",
    Filter: ColumnFilterComponent,
  },
];
