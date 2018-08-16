import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import lada_site from 'img/lada_site.png';
import lada_image from 'img/lada_image.png';
import lada_detal from 'img/lada_detal.png';

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
  height: calc(100% - 96px);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

class CatalogsPage extends Component {
  render() {
    return (
      <Wrapper>
        <CardsWrapper>
          <Card>
            <LogoWrapper>
              <img
                src={lada_site}
                alt=""
                style={{
                  maxWidth: '132px',
                }}
              />
            </LogoWrapper>
            <ViewButton>Смотреть</ViewButton>
          </Card>
          <Card>
            <LogoWrapper>
              <img
                src={lada_image}
                style={{
                  maxWidth: '124px',
                }}
                alt=""/>
            </LogoWrapper>
            <ViewButton>Смотреть</ViewButton>
          </Card>
          <Card>
            <LogoWrapper>
              <img
                src={lada_detal}
                style={{
                  maxWidth: '166px',
                }}
                alt=""
              />
            </LogoWrapper>
            <ViewButton>Смотреть</ViewButton>
          </Card>
        </CardsWrapper>
      </Wrapper>
    );
  }
}

export default CatalogsPage;
