import styled from 'styled-components';

export const LinkCustomized = styled.a`
display:block;
text-decoration: none;
color: #F15E5E;
padding-right: 10px;
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
