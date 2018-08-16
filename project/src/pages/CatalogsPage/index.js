import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { push } from "react-router-redux";

import { actions as appActions } from 'reducers/app';

import cat_zap from 'img/cat_zap.png';
import online_cat from 'img/online-cat.png';
import cat_acc from 'img/cat_acc.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  zoom: 1.5;
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  background: #FFFFFF;
  width: 220px;
  height: 288px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, .16) 0px 10px 15px;
  padding-bottom: 96px;
  position: relative;
  display: flex;
  justify-content: center;

  & + & {
    margin-left: 15px;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  bottom: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.p`
  color: #485966;
  max-width: 158px;
  text-align: center;
  font-family: 'Lada-Bold';
  margin: 0;
  margin-top: 20px;
  line-height: 24px;
`;

const ViewButton = styled.button`
  background: #F47920;
  height: 45px;
  color: #FFF;
  width: 168px;
  outline: none;
  border: none;
  text-align: center;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  span {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

class CatalogsPage extends Component {
  render() {
    return (
      <Wrapper>
        <CardsWrapper>
          <Card>
            <LogoWrapper>
              <img
                src={cat_zap}
                alt=""
                style={{
                  maxWidth: '70px',
                }}
              />
              <CardTitle>Каталог запасных частей</CardTitle>
            </LogoWrapper>
            <ViewButton>
              <Link to="/send/1">
                Скачать
              </Link>
            </ViewButton>
          </Card>
          <Card>
            <LogoWrapper>
              <img
                src={online_cat}
                alt=""
                style={{
                  maxWidth: '81px',
                }}
              />
              <CardTitle>Онлайн каталог аксессуаров</CardTitle>
            </LogoWrapper>
            <ViewButton>
              <a
                // href="http://www.lada.ru/cars/accessories.html"
                href="http://www.example.com"
                target="target_iframe"
                // target="_blank"
                onClick={() => { this.props.showIframe(); }}
              >Смотреть</a>
            </ViewButton>
          </Card>
          <Card>
            <LogoWrapper>
              <img
                src={cat_acc}
                style={{
                  maxWidth: '73px',
                }}
                alt=""
              />
              <CardTitle>Каталог аксессуаров</CardTitle>
            </LogoWrapper>
            <ViewButton>
              <Link to="/send/3">
                Скачать
              </Link>
            </ViewButton>
          </Card>
        </CardsWrapper>
      </Wrapper>
    );
  }
}

export default connect(null, {
  push,
  showIframe: appActions.showIframe,
})(CatalogsPage);
