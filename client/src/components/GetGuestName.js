import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledButton1 } from './StyledButton1';
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
  text-align: center;
`;

const Container = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  margin-left: 3em;
  margin-bottom: 3em;
`;

const H3 = styled.h3`
  text-align: center;
  margin: 0 auto;
`;

const FoodContainer = styled.div`
  display: block;
`;

const StyledRadio = styled.input`
  cursor: pointer;
  color: #563a21;
  width: 150%;
`;

const GetGuestName = props => (
  <Form noValidate onSubmit={props.onPostSubmit}>
    <h1>
      {props.guestName} {props.firstName}
    </h1>
    <Container />
    <h2>
      <label for='plusOne'>Who is your guest for the wedding?</label>
    </h2>
    <p>
      <Input
        id='plusOne'
        onChange={props.onChange}
        name='plusOne'
        type='text'
        placeholder='Guest Name?'
      />
    </p>
    <FoodContainer>
      <h2>
        <label for='food'>What is your choice of food?</label>
      </h2>
      <H3>
        <Container>
          <label for='Steak'>
            Steak
            <StyledRadio
              id='food'
              onChange={props.onChange}
              name='food'
              type='radio'
              value='Steak'
            />
          </label>
        </Container>
        <Container>
          <label for='Salmon'>
            Salmon
            <StyledRadio
              id='food'
              onChange={props.onChange}
              name='food'
              type='radio'
              value='Salmon'
            />
          </label>
        </Container>
        <Container>
          <label for='Chicken'>
            Chicken
            <StyledRadio
              id='food'
              onChange={props.onChange}
              name='food'
              type='radio'
              value='Chicken'
            />
          </label>
        </Container>
      </H3>
      <h2>
        <label for='guestFood'>What is you guests choice of food?</label>
      </h2>
      <H3>
        <Container>
          <label for='Steak'>
            Steak
            <StyledRadio
              id='guestFood'
              onChange={props.onChange}
              name='guestFood'
              type='radio'
              value='Steak'
            />
          </label>
        </Container>
        <Container>
          <label for='Salmon'>
            Salmon
            <StyledRadio
              id='guestFood'
              onChange={props.onChange}
              name='guestFood'
              type='radio'
              value='Salmon'
            />
          </label>
        </Container>
        <Container>
          <label for='Chicken'>
            Chicken
            <StyledRadio
              id='guestFood'
              onChange={props.onChange}
              name='guestFood'
              type='radio'
              value='Chicken'
            />
          </label>
        </Container>
      </H3>
    </FoodContainer>
    <StyledButton1 type='submit'>Submit</StyledButton1>
  </Form>
);

export default GetGuestName;
