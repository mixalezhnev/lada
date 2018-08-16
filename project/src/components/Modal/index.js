// @flow
import React from 'react';
import styled from 'styled-components';
import modalBack from "./images/back.png";


const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: url(${modalBack});

  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
`;

export default Modal;
