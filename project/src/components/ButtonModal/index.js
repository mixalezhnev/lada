import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  width: 180px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  color: #fffefe;
  font-family: "Myriad Pro";
  font-size: 25px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ isGreen }) => isGreen ? '#01ae78' : 'transparent'};
  border: ${({ isGreen }) => isGreen ? '0px' : '1px'} solid #777777;
`;

class ButtonModal extends Component {
  render() {
    return (
      <ButtonDiv isGreen={this.props.isGreen} onClick={this.props.onClick}>
        {this.props.text}
      </ButtonDiv>
    );
  }
}

export default ButtonModal;
