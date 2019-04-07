import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 50%;
  height: 1.5em;
  background-color: transparent;
  color: #000;
  border: none;
  border-bottom: 1px solid #563a21;
  outline: none;
  font-size: 2rem;
  font-family: 'Life Savers', cursive;
  text-align: center;
  overflow: hidden;
`;

const StyledInput = props => (
  <Input
    onChange={props.onChange}
    placeholder={props.placeHolder}
    name={props.name}
    id={props.id}
  />
);

export default StyledInput;
