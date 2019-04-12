import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.primary.font4};
  margin: 0 auto;
  text-decoration: none;
  font-size: 1rem;
  color: ${props => props.theme.colors.primary.rose};
  padding: 20px;
`;

const YourRsvp = props => (
  <div>
    <H1>
      Here is your info {props.firstName}! We can't wait to see you at the
      wedding
    </H1>
    <H1>Your Name: {props.name}</H1>
    <H1>Your Guest: {props.guestName}</H1>
    <H1> Your Food: {props.food}</H1>
    <H1>Your Guests Food: {props.guestFood}</H1>
    <H1>
      More info on the event at the <Link to='/About'>about page</Link>
    </H1>
  </div>
);

export default YourRsvp;
