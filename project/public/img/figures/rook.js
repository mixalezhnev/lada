import React, { Component } from 'react';
import styled from 'styled-components';

const TopFigure = styled.div`

`;

const BottomElem = styled.div`
  position: relative;
  top: -54%;
  left: -26%;
`;


class Rook extends Component {
  render() {
    return (
      <div style={{ width: '45%' }}>
        <svg style={{ width: '100%' }}
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
      </div>
    );
  }
}


export default Rook;