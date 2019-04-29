import React from 'react';

import Search from '../Search';
import BookList from '../BookList';

const Content = () => {
  return [<Search key="search" />, <BookList key="book-list" />];
};

Content.displayName = 'Content';

Content.propTypes = {};

export default Content;
