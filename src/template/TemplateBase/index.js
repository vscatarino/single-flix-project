import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = styled.main`
   background-color:var(--grayLight);
   color: var(--black);
   flex: 1;
   padding-top: 50px;
   padding-left: 5%;
   padding-right: 5%;
   ${({ paddingAll }) => css`
   padding: ${paddingAll}`}
`;

function TemplateBase({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default TemplateBase;
