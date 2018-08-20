import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import catalog from 'img/catalog.png';
import website from 'img/website.png';
import shade from 'img/shade.png';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  height: 516px;
  width: 408px;
  ${'' /* box-shadow: rgba(0, 0, 0, .16) 0px 10px 15px; */}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  background: #EEEEEE;
  text-decoration: none;
  position: relative;

  span {
    color: #5B6770;
    font-family: 'Lada-Bold';
    font-size: 40px;
    margin-top: 90px;
  }

  :active {
    background: #F47920;

    img {
      filter: brightness(0) invert(1);
    }
  }
`;

const Shade = styled.img`
  position: absolute;
  bottom: -173px;
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
          <StyledLink to="/sites">
            <img src={website} alt=""/>
            <span>Сайты</span>
            <Shade src={shade} />
          </StyledLink>
          <StyledLink to="/catalogs">
            <img src={catalog} alt=""/>
            <span>Каталоги</span>
            <Shade src={shade} />
          </StyledLink>
        </LinkWrapper>
      </Wrapper>
    );
  }
}

export default MainPage;
