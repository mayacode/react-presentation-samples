import React from 'react';
import styled from 'styled-components';

import Content from '../Content';

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
    </section>,
    <StyledFooter key="footer">&copy; MayaCode Library</StyledFooter>,
  ];
}
