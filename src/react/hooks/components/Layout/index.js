import React from 'react';

import Search from '../Search';

export default () => [
  <header key="header">
    <h1>Library App</h1>
  </header>,
  <section key="content">
    <Search />
  </section>,
  <footer key="footer">&copy; MayaCode Library</footer>,
];
