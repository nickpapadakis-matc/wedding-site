import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0 auto;

  margin-bottom: 3em;
`;

const BasicContainer = ({ children }) => <Container>{children}</Container>;

export default BasicContainer;
