import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

const NavBar = styled(Flex)`
  color: ${props => props.theme.colors.primary.rose};
  font-size: 1.2rem;
  font-family: ${props => props.theme.fonts.primary.font4};
  margin: 0 auto;
`;

const Nav = ({ children, ...props }) => <NavBar>{children}</NavBar>;

export default Nav;
