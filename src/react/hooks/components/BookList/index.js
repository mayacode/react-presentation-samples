import React from 'react';
import {array} from 'prop-types';

import Table from '../Table';

function BookList({data}) {
  const headers = ['', 'Author', 'Title'];

  const renderRows = (book, index) => (
    <tr key={book.id}>
      <td>{index + 1}</td>
      <td>
        {Array.isArray(book.volumeInfo.authors)
          ? book.volumeInfo.authors.join(', ')
          : ''}
      </td>
      <td>{book.volumeInfo.title}</td>
    </tr>
  );

  return (
    <>
      {data.length > 0 && [
        <p key="search-string">Displaying {data.length} elements</p>,
        <Table
          key="table"
          headers={headers}
          data={data}
          callback={renderRows}
        />,
      ]}
    </>
  );
}

BookList.displayName = 'BookList';

BookList.propTypes = {
  data: array,
};

export default BookList;
