import styled from 'styled-components';

const CustomizedSelect = styled.select`
background: var(--white);
color: var(--grayDark);
display: block;
width: 100%;
height: 58px;
font-size: 18px;

outline: 0;
border: 0;
border-top: 4px solid transparent;
border-bottom: 4px solid var(--primary);

padding: 16px 16px;
margin-bottom: 45px;

resize: none;
border-radius: 4px;
transition: border - color .3s;
`;

export default CustomizedSelect;