import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Outter = styled(Box)`
  background-color: #fffcd6;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;

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

const HeadLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.primary.lightGreen};
    font-weight: bold;
  }
`;

const NavItem = styled.div`
  padding-left: 20px;
`;

const Header = props => (
  <Outter>
    <HeadLink to='/'>
      <H1>{props.title}</H1>
    </HeadLink>
    <Nav>
      <NavItem>
        <HeadLink to='/'>Home</HeadLink>
      </NavItem>
      <NavItem>
        <HeadLink to='/Home'>GetStarted</HeadLink>
      </NavItem>
      <NavItem>
        <HeadLink to='/About'>About</HeadLink>
      </NavItem>
      <NavItem>
        <HeadLink to='/YourRsvp'>Your RSVP</HeadLink>
      </NavItem>
    </Nav>
  </Outter>
);

export default Header;
