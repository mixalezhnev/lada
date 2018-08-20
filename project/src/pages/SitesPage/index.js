import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import lada_site from 'img/lada_site.png';
import lada_image from 'img/lada_image.png';
import lada_detal from 'img/lada_detal.png';
import shade from 'img/shade.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${'' /* zoom: 1.5; */}
`;

const CardsWrapper = styled.div`
  display: flex;
`;

const Card = styled.div`
  background: #EEEEEE;
  width: 304px;
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

const Shade = styled.img`
  position: absolute;
  bottom: -90px;
  width: 283px;
  height: 40px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  height: calc(100% - 66px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 203px;
    height: 217px;
    margin-bottom: 20px;
  }

  span {
    width: 100%;
    display: block;
    text-align: center;
    color: #5B6770;
    font-family: 'Lada-Bold';
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
`;

class CatalogsPage extends Component {
  render() {
    return (
      <Wrapper>
        <CardsWrapper>
          <Card>
            <LogoWrapper>
              <img
                src={lada_image}
                alt=""
              />
              <span>lada-image.ru</span>
            </LogoWrapper>
            <ViewButton
                onClick={() => { window.wcordova.InAppBrowser.open('https://lada-image.ru/') }}
            >Смотреть</ViewButton>
            <Shade src={shade} />
          </Card>

          <Card>
            <LogoWrapper>
              <img
                src={lada_site}
                alt=""
              />
              <span>lada.ru</span>
            </LogoWrapper>
            <ViewButton
                onClick={() => { window.wcordova.InAppBrowser.open('http://www.lada.ru/') }}
            >Смотреть</ViewButton>
            <Shade src={shade} />
          </Card>

          <Card>
            <LogoWrapper>
              <img
                src={lada_detal}
                alt=""
              />
              <span>lada-original.ru</span>
            </LogoWrapper>
            <ViewButton
                onClick={() => { window.wcordova.InAppBrowser.open('https://lada-original.ru/') }}
            >Смотреть</ViewButton>
            <Shade src={shade} />
          </Card>
        </CardsWrapper>
      </Wrapper>
    );
  }
}

export default CatalogsPage;
