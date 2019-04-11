import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  height: 100px;
  background-color: #fffcd6;
  cursor: pointer;
  border-radius: 5%;
  font-family: 'Delius Swash Caps', cursive;
  font-size: 2rem;
  &:hover {
    background: linear-gradient(to top right, #fffca6 0%, #fffcd6 100%);
  }
  box-shadow: 1px 1px 1px 1px #563a21;
`;

export const StyledButton1 = props => <StyledButton {...props} />;
