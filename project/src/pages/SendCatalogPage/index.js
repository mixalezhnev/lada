import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { goBack } from "react-router-redux";
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import cancel from 'img/cancel.png';
import mail from 'img/mail.png';

const ladaUrl = 'http://185.213.211.67:9037/presentation?i=1&m=';
const lesarUrl = 'http://185.213.211.67:9037/presentation?i=2&m=';

export const isEmail = (value) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? undefined
    : 'Неправильный email';
};

export const parseJSON = response => response.json();

export const request = (url, options) => {
  return fetch(url, options)
    .then(parseJSON);
};

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

  transition: .3 linear background;

  :disabled {
    background: #979fa7;
  }
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

const ErrorMsg = styled.div`
  color: #ff6969;
  margin-top: 6px;
`;

class SendCatalogPage extends Component {
  state = {
    email: '',
    isSubmitting: false,
    touched: false,
  };

  emailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      error: isEmail(value),
    });
  }

  submit = async () => {
    const id = this.props.match.params.id;
    let resp;

    this.setState({
      isSubmitting: true,
    });

    try {
      if (id === '1') {
        resp = await request(`${ladaUrl}${this.state.email}`);
      } else {
        resp = await request(`${lesarUrl}${this.state.email}`);
      }
    } catch (e) {
      toastr.error('Произошла ошибка при отправке сообщения', '');
    }

    this.setState({
      isSubmitting: false,
    });

    if (resp.data.includes('OK')) {
      toastr.success('Сообщение успешно отправлено', '');
      this.props.goBack();
    }
  }

  handleBlur = () => {
    this.setState({
      touched: true,
    });
  }

  render() {
    return (
      <Wrapper>
        <Card>
          <Link to="/catalogs">
            <CloseButton src={cancel} />
          </Link>
          <SendIcon src={mail} />
          <Title>Введите адрес Вашей почты, и получите каталог.</Title>
          <EmailInput
            type="email"
            placeholder="Введите Ваш e–mail"
            value={this.state.email}
            onChange={this.emailChange}
            disabled={this.state.isSubmitting}
            onBlur={this.handleBlur}
          />
          <SendButton
            onClick={this.submit}
            disabled={this.state.isSubmitting || this.state.error || this.state.email.length === 0}
          >{this.state.isSubmitting ? 'Идёт отправка...' : 'Отправить'}</SendButton>
          {
            (this.state.error && this.state.touched) && <ErrorMsg>{this.state.error}</ErrorMsg>
          }
        </Card>
      </Wrapper>
    );
  }
}

export default connect(null, {
  goBack,
})(SendCatalogPage);
