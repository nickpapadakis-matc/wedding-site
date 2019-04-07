import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Link } from 'react-router-dom';

const Outter = styled(Flex)`
  background-color: #fffcd6;

  margin: 0;
`;
const H1 = styled.h1`
  font-family: 'Life Savers', cursive;
  margin: 0 auto;
  padding: 50px;
  text-decoration: none;
  font-size: 3rem;
  background: -webkit-linear-gradient(#fffcd6, #b77b82);
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
