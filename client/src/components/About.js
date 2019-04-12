import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.primary.font4};
  margin: 0 auto;
  padding: 10px;
  text-decoration: none;
  font-size: 3rem;
  background: -webkit-linear-gradient(
    ${props => props.theme.colors.primary.creme},
    ${props => props.theme.colors.primary.rose}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const About = props => (
  <div>
    <H1>About page coming soon!</H1>
  </div>
);

export default About;
