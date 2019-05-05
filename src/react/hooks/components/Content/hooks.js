import {useState, useEffect, useDebugValue} from 'react';

export const googleBooksSearchAPI =
  'https://www.googleapis.com/books/v1/volumes?q=';

export function useBookSearchString() {
  const [searchString, setSearchString] = useState('');
  const onChangeHandler = ev => setSearchString(ev.target.value);
  useDebugValue(searchString);
  return {bookSearchString: searchString, onChangeHandler};
}

export function useBookList(keyword) {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    if (keyword.length > 2) {
      fetch(`${googleBooksSearchAPI}${keyword}`)
        .then(response => response.json())
        .then(myJson => setBookList(myJson.items || []))
        .catch(error => console.log('error', error));
    }
  }, [keyword]);

  useDebugValue(bookList);

  return bookList;
}
