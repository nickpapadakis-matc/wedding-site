import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

const NavBar = styled(Flex)`
  color: #b77b82;
  font-size: 1.2rem;
  font-family: 'Life Savers', cursive;
  margin: 0 auto;
`;

const Nav = ({ children, ...props }) => <NavBar>{children}</NavBar>;

export default Nav;
