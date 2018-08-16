import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { Route, Switch, withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { goBack } from "react-router-redux";

import { actions as appActions } from 'reducers/app';

import back from 'img/background.png';
import lada from 'img/lada.png';

import MainPage from "pages/MainPage";
import SitesPage from "pages/SitesPage";
import CatalogsPage from "pages/CatalogsPage";
import SendCatalogPage from "pages/SendCatalogPage";
import Iframe from 'components/Iframe';

const Wrapper = styled.div`
  height: 100vh;
  background: url(${back}) no-repeat;
  background-size: cover;
  position: relative;
`;

const LadaLogo = styled.img`
  position: absolute;
  height: 52px;
  left: 50%;
  top: 178px;
  transform: translateX(-50%);
`;

const Navbar = styled.header`
  height: 66px;
  width: 100%;
  position: fixed;
  top: 0;
  background: white;
  box-shadow: rgba(0, 0, 0, .16) 0px 3px 6px;
  display: flex;
  align-items: center;
  display: none;

  ${({ isVisible }) => isVisible && `
    display: flex;
  `}
`;

const Title = styled.span`
  color: #485966;
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-family: 'Lada-Bold';
`;

const BackArrow = styled.div`
  height: 18px;
  width: 18px;
  border: 2px solid #F47920;
  border-right: 0;
  border-bottom: 0;
  transform: rotate(-45deg);
  transform-origin: 50%;
`;

const Back = styled.span`
  color: #485966;
  font-size: 18px;
  margin-left: 17px;
  font-family: 'Lada-Bold';
`;

const BackWrapper = styled.div`
  margin-left: 37px;
  display: flex;
  align-items: center;
`;

class App extends Component {
  render() {
    const { location: { pathname } } = this.props;

    return (
      <Wrapper>
        <Navbar isVisible={pathname !== '/'}>
          <BackWrapper onClick={() => { this.props.goBack(); this.props.hideIframe(); }}>
            <BackArrow />
            <Back>Назад</Back>
          </BackWrapper>
          <Title>{pathname === '/catalogs' ? 'Каталоги' : 'Сайты'}</Title>
        </Navbar>
        {
          (pathname.includes('send') || pathname.includes('sites')) || <LadaLogo src={lada} />
        }
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/sites" component={SitesPage} />
          <Route exact path="/catalogs" component={CatalogsPage} />
          <Route path="/send/:id" component={SendCatalogPage} />
        </Switch>
        <Iframe />
      </Wrapper>
    );
  }
}

export default withRouter(connect(null, {
  goBack,
  hideIframe: appActions.hideIframe,
})(App));
