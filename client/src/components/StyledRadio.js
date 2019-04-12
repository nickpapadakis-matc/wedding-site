import React from 'react';
import styled from 'styled-components';

const Radio = styled.input`
  cursor: pointer;
  color: ${props => props.theme.colors.primary.brown};
`;

const StyledRadio = props => (
  <Radio
    onChange={props.onChange}
    value={props.value}
    name={props.name}
    id={props.id}
    type='radio'
  />
);

export default StyledRadio;
