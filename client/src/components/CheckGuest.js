import React from 'react';
import styled from 'styled-components';
import { StyledButton1 } from './StyledButton1';
import { Link } from 'react-router-dom';

import { HeaderKeyFrame } from './Styles/KeyFrames/HeadKeyFrame';

const Form = styled.form`
  animation: ${HeaderKeyFrame} 2s ease forwards;
  margin: 0 auto;
`;

const H2 = styled.h2`
  color: red;
  width: 80%;
  text-align: center;
  font-size: 2rem;
`;

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

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-bottom: 3em;
`;

const CheckGuest = props => (
  <Form noValidate onSubmit={props.onSubmit}>
    <Container>
      {props.state.errors.guestName && (
        <H2>
          {props.state.errors.guestName} {props.state.firstName}
        </H2>
      )}
    </Container>
    <h2>
      <label for='guestName'>Name on Invite</label>
    </h2>
    <p>
      <Input
        onChange={props.onChange}
        placeholder='Please Enter Your Name'
        name='guestName'
        id='guestName'
      />
    </p>

    <StyledButton1 type='submit'>Submit</StyledButton1>
  </Form>
);

export default CheckGuest;
