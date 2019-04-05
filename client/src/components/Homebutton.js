import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex, Box } from 'rebass';
import { StyledButton1 } from './StyledButton1';

const StyledWrap = styled(Box)`
  padding: 50px;
`;

const HomeButton = props => (
  <StyledWrap>
    <Link to='/BasicForm'>
      <StyledButton1>{props.btnText}</StyledButton1>
    </Link>
  </StyledWrap>
);

export default HomeButton;
