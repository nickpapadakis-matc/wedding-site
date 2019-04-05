import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Link } from 'react-router-dom';

const Outter = styled(Flex)`
  background-color: #fffcd6;
  min-height: 20vh;
  color: #000;
`;
const H1 = styled.h1`
  font-family: 'Life Savers', cursive;
  margin-left: 5%;
  text-decoration: none;
  font-size: 400%;
  background: -webkit-linear-gradient(#2f4b26, #b77b82);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeadLink = styled(Link)`
  text-decoration: none;
`;

const Header = props => (
  <HeadLink to='/'>
    <Outter>
      <H1>{props.title}</H1>
    </Outter>
  </HeadLink>
);

export default Header;
