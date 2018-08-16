import React, { Component } from "react";
import styled from "styled-components";

const LabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  outline: none;
`;

const InputCheckbox = styled.input`
  position: absolute;
  top: -99999px;
  left: -99999px;
`;

const SliderDiv = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => (checked ? "#ccc" : "#3A3A3A")};
  transition: 0.4s;
  border-radius: 34px;
  height: 26px;

  &:before {
    top: -4px;
    position: absolute;
    content: "";
    height: 33px;
    width: 33px;
    left: 0px;
    bottom: 4px;
    background-color: ${({ checked }) => (checked ? "#f0a20b" : "#767676")};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({ checked }) => (checked ? "translateX(28px)" : "none")};
  }
`;

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false
    };
  }
  handleChange = () => {
    this.props.changeSelection(!this.state.isChecked);
    this.setState({ isChecked: !this.state.isChecked });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ isChecked: nextProps.isChecked });
  }

  focus = () => {
    return false;
  };
  render() {
    const { className } = this.props;

    return (
      <LabelSwitch className={className}>
        <InputCheckbox
          disabled
          value={this.state.isChecked}
          onChange={this.handleChange}
          onFocus={this.focus}
        />
        <SliderDiv
          onClick={this.handleChange}
          checked={this.state.isChecked}
          className="slider"
        />
      </LabelSwitch>
    );
  }
}

export default Checkbox;
