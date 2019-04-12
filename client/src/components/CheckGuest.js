import React from 'react';
import styled from 'styled-components';
import StyledInput from './StyledInput';
import StyledForm from './StyledForm';
import LabelWrapper from './LabelWrapper';

const Container = styled.div`
  margin-bottom: 3em;
`;

const CheckGuest = props => (
  <StyledForm buttonText='Submit' onSubmit={props.onSubmit}>
    <Container>
      {props.state.errors.guestName && (
        <LabelWrapper color='#B77B82'>
          {props.state.firstName}, {props.state.errors.guestName}
        </LabelWrapper>
      )}
    </Container>
    <LabelWrapper color='#2F4B26'>
      <label for='guestName'>Name on Invite</label>
    </LabelWrapper>
    <p>
      <StyledInput
        onChange={props.onChange}
        name='guestName'
        id='guestName'
        placeHolder='Enter Name'
      />
    </p>
  </StyledForm>
);

export default CheckGuest;
