import styled from 'styled-components';

export const LINK = styled.a`
text-decoration: none;
color: #F15E5E;
&:hover{
  color:var(--primary);
  cursor:pointer;
}
`;

export const Container = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
width:73%;
@media(min-width: 768px) {
    width:25%;
  }
`;

export const Text = styled.span`
display:block;
color:var(--grayDark);
`;
