import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import catalog from 'img/catalog.png';
import website from 'img/website.png';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  height: 384px;
  width: 304px;
  box-shadow: rgba(0, 0, 0, .16) 0px 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  :active {
    background: #F47920;

    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  > *:first-child {
    margin-right: 32px;
  }
`;

class MainPage extends Component {
  render() {
    return (
      <Wrapper>
        <LinkWrapper>
          <StyledLink to="/catalogs">
            <img src={catalog} alt=""/>
          </StyledLink>
          <StyledLink to="/sites">
            <img src={website} alt=""/>
          </StyledLink>
        </LinkWrapper>
      </Wrapper>
    );
  }
}

export default MainPage;
