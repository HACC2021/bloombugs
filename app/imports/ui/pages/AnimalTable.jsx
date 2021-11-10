import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import '../../../client/dataTables.css';

const columns = [
  { name: 'Date', selector: row => row.date, sortable: true },
  { name: 'Name', selector: row => row.name, sortable: true },
  { name: 'Phone', selector: row => row.phone, sortable: true },
  { name: 'Location', selector: row => row.location, sortable: true },
  { name: 'Description', selector: row => row.description, sortable: true },
  { name: 'Identifying Markers', selector: row => row.markers, sortable: true },
  { name: 'Animal Behavior', selector: row => row.behavior, sortable: true },
  { name: 'Number of People', selector: row => row.numPeople, sortable: true },
];

export const AnimalTable = (props) => {
  const data = props.reports;
  const tableData = {
    columns,
    data,
  };
  return (
    <DataTableExtensions {...tableData}>
      <DataTable>
        columns={columns}
        data={data}
        noHeader
        pagination
      </DataTable>
    </DataTableExtensions>
  );
};
