import React from 'react';
import styled from 'styled-components';
import { StyledButton1 } from './StyledButton1';
import { HeaderKeyFrame } from './Styles/KeyFrames/HeadKeyFrame';
import { Link } from 'react-router-dom';

const Form = styled.form`
  animation: ${HeaderKeyFrame} 2s ease forwards;
  margin: 0 auto;
  text-align: center;
`;

const StyledForm = ({ children, ...props }) => (
  <Form noValidate onSubmit={props.onSubmit}>
    {children}

    <StyledButton1 type='submit'>{props.buttonText}</StyledButton1>
  </Form>
);

export default StyledForm;
