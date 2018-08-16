import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.div`
  background: #131313;
  height: 7vh;
  display: flex;
  background: #131313;
  align-items: flex-end;
`;

const StyledList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const StyledListElem = styled.li`
text-align: center;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #777777;
  list-style-type: none;
  font-size: 2vh;
  border-bottom: 1px solid #393939;
  transition: all 0.4s;
  color: ${({ isActive }) => (isActive ? 'white' : '#777777')};
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #ffffff' : 'none')};
`;

const StyledLink = styled(Link) `
  text-decoration: none;
  color: inherit
`;

class TopElements extends Component {
  render() {
    const { url } = this.props;
    return (
      <HeaderDiv>
        <StyledList>
          <StyledListElem isActive={url.includes('start')} ><StyledLink to="/start">Create</StyledLink></StyledListElem>
          <StyledListElem>Join</StyledListElem>
          <StyledListElem isActive={url.includes('history')}><StyledLink to="/history">My games</StyledLink></StyledListElem>
        </StyledList>
      </HeaderDiv >
    );
  }
}

export default TopElements;
