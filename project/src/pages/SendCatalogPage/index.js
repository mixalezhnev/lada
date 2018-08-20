import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Link } from 'react-router-dom';

import cancel from 'img/cancel.png';
import mail from 'img/mail.png';

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
  min-height: 496px;
  width: 417px;
  padding: 68px 37px 33px 37px;
  background: #EEEEEE;
  border-radius: 2px;
  ${'' /* box-shadow: rgba(0, 0, 0, .16) 0px 10px 15px; */}
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const SendButton = styled.button`
  background: #FA5000;
  height: 48px;
  color: #FFF;
  width: 160px;
  outline: none;
  border: none;
  text-align: center;
  box-shadow: rgba(0, 0, 0, .24) 0px 1px 0px;
  font-size: 20px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 22px;
  right: 20px;
  width: 24px;
  height: 24px;
`;

const SendIcon = styled.img`
  width: 85px;
  height: 96px;
  margin-bottom: 33px;
`;

const Title = styled.p`
  color: #485966;
  margin: 0;
  margin-bottom: 31px;
  font-family: 'Lada-Bold';
  text-align: center;
`;

const EmailInput = styled.input`
  height: 48px;
  width: 256px;
  outline: none;
  border: 1px solid #AAAAAA;
  border-radius: 2px;
  padding: 13px 16px 13px 13px;
  margin-bottom: 32px;
`;

class SendCatalogPage extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <Wrapper>
        <Card>
          <Link to="/catalogs">
            <CloseButton src={cancel} />
          </Link>
          <SendIcon src={mail} />
          <Title>Введите адрес Вашей почты, и получите каталог.</Title>
          <EmailInput type="email" placeholder="Введите Ваш e–mail" />
          <SendButton>Отправить</SendButton>
        </Card>
      </Wrapper>
    );
  }
}

export default connect(null, {
  goBack,
})(SendCatalogPage);
