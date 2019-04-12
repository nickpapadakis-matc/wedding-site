import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  height: 100px;
  background-color: ${props => props.theme.colors.primary.creme};
  cursor: pointer;
  border-radius: 5%;
  font-family: ${props => props.theme.fonts.primary.font4};
  font-size: 2rem;
  &:hover {
    background: linear-gradient(
      to top right,
      ${props => props.theme.colors.primary.darkCreme} 0%,
      ${props => props.theme.colors.primary.creme} 100%
    );
  }
  box-shadow: 1px 1px 1px 1px ${props => props.theme.colors.primary.brown};
`;

export const StyledButton1 = props => <StyledButton {...props} />;
