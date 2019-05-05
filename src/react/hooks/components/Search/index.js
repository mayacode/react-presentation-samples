import React from 'react';
import {string, func} from 'prop-types';
import InputText from '../Input';

const Search = ({keyword, onChange, title}) => {
  return (
    <>
      {!!title && <p>{title}</p>}
      <InputText
        key="input"
        name="search"
        value={keyword}
        onChange={onChange}
      />
    </>
  );
};

Search.displayName = 'Search';

Search.propTypes = {
  keyword: string.isRequired,
  onChange: func.isRequired,
  title: string,
};

export default Search;
