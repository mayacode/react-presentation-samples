import React from 'react';
import Search from '../Search';
import BookList from '../BookList';
import {useBookSearchString, useBookList} from './hooks';

function Content() {
  const {bookSearchString, onChangeHandler} = useBookSearchString();
  const bookList = useBookList(bookSearchString);

  return [
    <Search
      key="BookSearch"
      keyword={bookSearchString}
      onChange={onChangeHandler}
      title="Search for book titles, authors or description"
    />,
    <BookList key="book-list" data={bookList} />,
  ];
}

Content.displayName = 'Content';

export default Content;
