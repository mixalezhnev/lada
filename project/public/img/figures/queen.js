import React, { Component } from 'react';
import styled from 'styled-components';

const TopFigure = styled.div`

`;

const BottomElem = styled.div`
  position: relative;
  top: -14.5px;
  left: -1px;
`;



class Queen extends Component {
  render() {
    return (
      <svg style={{ width: '70%' }}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.84 55.68">
        <title>ladia</title>
        <g id="Слой_2" data-name="Слой 2">
          <g id="Слой_1-2" data-name="Слой 1">
            <rect style={{ fill: 'red', fillRule: 'evenodd' }} x="11.04" y="17.28" width="23.76" height="18.72" />
            <polygon style={{ fill: 'red', fillRule: 'evenodd' }} points="34.8 13.68 44.16 7.68 44.16 0 36.96 0 36.96 4.56 26.64 4.56 26.64 0 19.44 0 19.44 4.56 9.12 4.56 9.12 0 1.92 0 1.92 7.68 11.04 13.68 34.8 13.68" />
            <polygon style={{ fill: 'red', fillRule: 'evenodd' }} points="34.8 39.12 11.04 39.12 0 46.32 45.84 46.32 34.8 39.12" />
            <rect style={{ fill: 'black', fillRule: 'evenodd' }} y="49.2" width="45.84" height="6.48" />
          </g>
        </g>
      </svg>
    );
  }
}
export default Queen;



// d="M17.64,0c9.74,0,17.64,1.56,17.64,3.48S27.38,7,17.64,7,0,5.4,0,3.48,7.9,0,17.64,0Z"