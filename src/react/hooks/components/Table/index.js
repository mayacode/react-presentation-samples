import React from 'react';
import {array, func} from 'prop-types';

function Table({data, headers, callback}) {
  const columnHeaders = headers.map(name => <th key={name}>{name}</th>);
  return (
    <table>
      <thead>
        <tr>{columnHeaders}</tr>
      </thead>
      <tbody>{data.map(callback)}</tbody>
      <tfoot>
        <tr>{columnHeaders}</tr>
      </tfoot>
    </table>
  );
}

Table.displayName = 'Table';

Table.propTypes = {
  data: array.isRequired,
  headers: array.isRequired,
  callback: func.isRequired,
};

export default Table;
