import React from 'react';
import styled from 'styled-components';

import Content from '../Content';
import Counter from '../Counter';

const StyledFooter = styled.footer`
  margin-top: 20px;
`;

export default function() {
  return [
    <header key="header">
      <h1>Library App</h1>
    </header>,
    <section key="content">
      <Content />
      <Counter />
    </section>,
    <StyledFooter key="footer">&copy; MayaCode Library</StyledFooter>,
  ];
}
