import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
   background-color: #f5f5f5;
   color: #111;
   flex: 1;
   padding-top: 50px;
   padding-left: 5%;
   padding-right: 5%;
`

function TemplateBase({children}) {
 return (
  <React.Fragment>
   <Menu />
   <Main>
    {children}
    </Main>
   <Footer />
  </React.Fragment>
 )
}

export default TemplateBase;