import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from 'rebass';
import { StyledButton1 } from './StyledButton1';

const StyledWrap = styled(Box)`
  padding: 50px;
  font-size: 50%;
`;

const HomeButton = props => (
  <StyledWrap>
    <Link to='/Home'>
      <StyledButton1>{props.btnText}</StyledButton1>
    </Link>
  </StyledWrap>
);

export default HomeButton;
