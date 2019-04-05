import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 40%;
  height: 20ems;
  background-color: transparent;
  color: #000;
  border: none;
  border-bottom: 1px solid #563a21;
  outline: none;
  font-size: 2rem;
`;

const StyledInput = props => (
  <Input onChange={props.onChange} placeHolder={props.placeHolder} />
);

export default StyledInput;
