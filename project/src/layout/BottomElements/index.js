import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import FooterIcon1 from "img/footer-icon-1.png";
import FooterIcon2 from "img/keys-hole.png";
import FooterIcon3 from "img/mortarboard.png";

import playIcon from './images/crown.png';
import gamesIcon from './images/games.png';

import shade from "./images/shade.png";

const Wrapper = styled.div`

`;

const StyledFooter = styled.div`
  height: 105px;
  background: #131313;
  border-top: 1px solid #393939;
  position: ${({ isStatic }) => isStatic ? 'relative' : 'fixed'};
  bottom: 0;
  width: 100%;
  z-index: 3;
`;

const Shade = styled.div`
  display: block;
  background: url(${shade}) no-repeat;
  background-repeat-x: repeat;
  width: 100%;
  position: absolute;
  height: 70px;
  bottom: 82px;
  z-index: 2;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: table;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledListElem = styled.li`
  list-style-type: none;
  padding: 15px;
  padding-bottom: 0px;
  display: table-cell;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  transition: all 0.4s;
`;

const Image = styled.img`
  height: 41px;
  margin: 0 auto 17px;
  cursor: pointer;
  display: block;
`;

const StyledLink = styled(Link)`
  font-size: font-size: 20px;;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const StyledSpan = styled.span`
  font-size: 20px;;
`;

class BottomElements extends Component {
  render() {
    return (
      <Wrapper className={this.props.className}>
        {
          this.props.withShade && <Shade />
        }
        <StyledFooter isStatic={this.props.isStatic}>
          <StyledUl>
            <StyledListElem>
              <Image src={playIcon} alt={"play"} />
              <StyledLink to="/start">
                Play
              </StyledLink>
            </StyledListElem>
            <StyledListElem>
              <Image src={gamesIcon} alt={"games"} />
              <StyledLink to="/history">
                {textCreater.createText("Games")}
              </StyledLink>
            </StyledListElem>
            <StyledListElem>
              <Image src={FooterIcon2} alt={"Chats / Contacts"} />
              <StyledSpan>Login</StyledSpan>
            </StyledListElem>
            <StyledListElem>
              <Image src={FooterIcon3} alt={"Settings"} />
              <StyledSpan>How to play</StyledSpan>
            </StyledListElem>
          </StyledUl>
        </StyledFooter>
      </Wrapper>
    );
  }
}

export default BottomElements;
