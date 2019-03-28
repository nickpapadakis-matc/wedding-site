import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  height: 100px;
  background-color: #fffcd6;
  cursor: pointer;
  border-radius: 5%;
  font-family: 'Cherry Cream Soda', cursive;
  font-size: 3rem;
  &:hover {
    background: linear-gradient(to top right, #2f4b26 0%, #fffcd6 100%);
  }
`;

export const StyledButton1 = props => <StyledButton {...props} />;
