import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { push } from "react-router-redux";

import { actions as appActions } from 'reducers/app';

import cat_zap from 'img/cat_zap.png';
import online_cat from 'img/online-cat.png';
import cat_acc from 'img/cat_acc.png';
import lecar from 'img/lecar.png';
import shade from 'img/shade.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${'' /* zoom: 1.5; */}
`;

const Shade = styled.img`
  position: absolute;
  bottom: -90px;
  width: 283px;
  height: 40px;
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  background: #EEEEEE;
  width: 262px;
  height: 386px;
  border-radius: 2px;
  ${'' /* box-shadow: rgba(0, 0, 0, .16) 0px 10px 15px; */}
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

  img {
    margin-bottom: 27px;
  }
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
  background: #FA5000;
  height: 48px;
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
                  width: '96px',
                }}
              />
              <CardTitle>Каталог запасных частей LADA</CardTitle>
            </LogoWrapper>
            <ViewButton>
              <Link to="/send/1">
                Скачать
              </Link>
            </ViewButton>
            <Shade src={shade} />
          </Card>

          <Card>
            <LogoWrapper>
              <img
                src={online_cat}
                alt=""
                style={{
                  width: '101px',
                }}
              />
              <CardTitle>Онлайн каталог аксессуаров LADA</CardTitle>
            </LogoWrapper>
            <ViewButton>
              <span
                onClick={() => { window.wcordova.InAppBrowser.open('http://www.lada.ru/cars/accessories.html') }}
              >Смотреть</span>
            </ViewButton>
            <Shade src={shade} />
          </Card>

          <Card>
            <LogoWrapper>
              <img
                src={cat_acc}
                style={{
                  width: '108px',
                }}
                alt=""
              />
              <CardTitle>Каталог аксессуаров LADA</CardTitle>
            </LogoWrapper>
            <ViewButton>
              <Link to="/send/2">
                Скачать
              </Link>
            </ViewButton>
            <Shade src={shade} />
          </Card>

          <Card>
            <LogoWrapper>
              <img
                src={lecar}
                style={{
                  width: '150px',
                  marginBottom: '43px',
                }}
                alt=""
              />
              <CardTitle>Каталог запасныйх частей LADA</CardTitle>
            </LogoWrapper>
            <ViewButton>
              <Link to="/send/3">
                Скачать
              </Link>
            </ViewButton>
            <Shade src={shade} />
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
