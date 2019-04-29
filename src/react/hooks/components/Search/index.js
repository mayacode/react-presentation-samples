import React, {useState, useEffect} from 'react';
import InputText from '../Input';

export default function Search() {
  const [searchString, setSearchString] = useState('');
  // const [bookList, setBookList] = useState([]);

  const onChangeHandler = ev => setSearchString(ev.target.value);

  useEffect(() => {});
  return (
    <div>
      <p>Search for book titles, authors or description</p>
      <InputText
        name="search"
        value={searchString}
        onChange={onChangeHandler}
      />
    </div>
  );
}
