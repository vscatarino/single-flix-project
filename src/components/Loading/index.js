import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
    content: ' ';
    display: block;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #f15e5e transparent #f2ceab transparent;
    animation: ${rotate} 1.2s linear infinite;
`;

const Loading = ({ width, height }) => (<Rotate width={width} height={height} />);

Loading.defaultProps = {
  width: 40,
  height: 40,
};

Loading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Loading;
