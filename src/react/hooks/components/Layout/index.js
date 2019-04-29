import React from 'react';

import Content from '../Content';

export default () => [
  <header key="header">
    <h1>Library App</h1>
  </header>,
  <section key="content">
    <Content />
  </section>,
  <footer key="footer">&copy; MayaCode Library</footer>,
];
