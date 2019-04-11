import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Outter = styled(Box)`
  background-color: #fffcd6;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;
const H1 = styled.h1`
  font-family: 'Life Savers', cursive;
  margin: 0 auto;

  text-decoration: none;
  font-size: 3rem;
  background: -webkit-linear-gradient(#fffcd6, #b77b82);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeadLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #248232;
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
