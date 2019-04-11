import React, { Component } from 'react';
import styled from 'styled-components';
import StyledInput from './StyledInput';
import StyledForm from './StyledForm';
import { Box } from 'rebass';
import LabelWrapper from './LabelWrapper';
import BasicContainer from './BasicContainer';
import StyledRadio from './StyledRadio';

const FoodContainer = styled(Box)`
  display: block;
`;

const GetGuestName = props => (
  <StyledForm link='/' buttonText='RSVP' onSubmit={props.onPostSubmit}>
    <LabelWrapper color='#B77B82'>
      {props.firstName}, {props.guestName}
    </LabelWrapper>
    <BasicContainer />
    <LabelWrapper>
      <label for='plusOne'>Who is your guest for the wedding?</label>
    </LabelWrapper>
    <p>
      <StyledInput
        onChange={props.onChange}
        name='plusOne'
        id='PlusOne'
        placeHolder='Enter your guests name'
      />
    </p>
    <BasicContainer />
    <FoodContainer>
      <LabelWrapper>
        <label for='food'>What is your choice of food?</label>
      </LabelWrapper>
      <BasicContainer />
      <BasicContainer>
        <LabelWrapper>
          <label for='Steak'>
            <StyledRadio
              id='food'
              onChange={props.onChange}
              name='food'
              value='Steak'
            />
            Steak
          </label>
        </LabelWrapper>
      </BasicContainer>
      <BasicContainer>
        <LabelWrapper>
          <label for='Salmon'>
            <StyledRadio
              id='food'
              onChange={props.onChange}
              name='food'
              value='Salmon'
            />
            Salmon
          </label>
        </LabelWrapper>
      </BasicContainer>
      <BasicContainer>
        <LabelWrapper>
          <label for='Chicken'>
            <StyledRadio
              id='food'
              onChange={props.onChange}
              name='food'
              value='Chicken'
            />
            Chicken
          </label>
        </LabelWrapper>
      </BasicContainer>

      <LabelWrapper>
        <label for='guestFood'>What is you guests choice of food?</label>
      </LabelWrapper>
      <BasicContainer />
      <BasicContainer>
        <LabelWrapper>
          <label for='Steak'>
            <StyledRadio
              id='guestFood'
              onChange={props.onChange}
              name='guestFood'
              value='Steak'
            />
            Steak
          </label>
        </LabelWrapper>
      </BasicContainer>
      <BasicContainer>
        <LabelWrapper>
          <label for='Salmon'>
            <StyledRadio
              id='guestFood'
              onChange={props.onChange}
              name='guestFood'
              value='Salmon'
            />
            Salmon
          </label>
        </LabelWrapper>
      </BasicContainer>
      <BasicContainer>
        <LabelWrapper>
          <label for='Chicken'>
            <StyledRadio
              id='guestFood'
              onChange={props.onChange}
              name='guestFood'
              value='Chicken'
            />
            Chicken
          </label>
        </LabelWrapper>
      </BasicContainer>
    </FoodContainer>
  </StyledForm>
);

export default GetGuestName;
