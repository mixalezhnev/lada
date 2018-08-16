import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

const Wrapper = styled.div`
  height: calc(100vh - 66px);
  width: 100%;
  position: fixed;
  z-index: 22;
  top: 66px;
  left: 0;
  display: none;

  ${({ isVisible }) => isVisible && `
    display: block;
  `}

  iframe {
    width: 100%;
    height: 100%;
  }
`;

class Iframe extends Component {
  render() {
    return (
      <Wrapper isVisible={this.props.isVisible}>
        <iframe
          name="target_iframe"
          frameBorder="0"
          // width="300px"
          // height="300px"
        />
      </Wrapper>
    );
  }
}

export default connect(({ app }) => ({
  isVisible: app.isIframeShown,
}))(Iframe);
