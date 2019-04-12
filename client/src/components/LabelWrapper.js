import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  color: ${props => props.color};
  width: 60%;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: ${props => props.theme.fonts.primary.font4};
`;

const LabelWrapper = ({ children, ...props }) => (
  <H2 color={props.color}>{children}</H2>
);

export default LabelWrapper;
