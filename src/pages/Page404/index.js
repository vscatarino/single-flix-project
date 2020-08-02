import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TemplateBase from '../../template/TemplateBase';

export const Container = styled.div`
 height: 90vh;
    padding: 0;
    margin: 0;
    /* display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    font-size:5.750em;
    color:var(--primary);
`;

export const Content = styled.div`
color:var(--grayDark);
font-size: 0.26em;
`;

export const CustomizedLink = styled.a`
color: #F15E5E;
text-decoration: none;
&:hover{
  color:var(--primary);
  cursor:pointer;
}
`;
const Page404 = () => (
  <TemplateBase>
    <Container>
      <div>404</div>
      <Content>Parece que você está perdido.</Content>
      <Content>
        Volte para a
        <CustomizedLink as={Link} to="/"> HOME.</CustomizedLink>
      </Content>
    </Container>
  </TemplateBase>
);
export default Page404;
