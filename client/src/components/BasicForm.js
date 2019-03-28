import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledButton1 } from './StyledButton1';
import { HeaderKeyFrame } from './Styles/KeyFrames/HeadKeyFrame';
import axios from 'axios';
import { Flex, Box } from 'rebass';

const StyledInput = styled.input`
  width: 40%;
  height: 20ems;
  background-color: transparent;
  color: #000;
  border: none;
  border-bottom: 1px solid #563a21;
  outline: none;
  font-size: 40px;
`;

const StyledForm = styled.form`
  animation: ${HeaderKeyFrame} 2s ease forwards;
`;

class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: '',
      verifiedGuest: '',
      plusOne: '',
      success: false,
      errors: {}
    };
  }

  componentDidMount() {
    this.setState({ success: false });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onPostSubmit = e => {
    e.preventDefault();

    const newGuest = {
      name: this.state.guestName,
      guestName: this.state.plusOne
    };

    axios
      .post('/api/users/rsvp', newGuest)
      .then(res => this.setState({ success: true }))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  onGetSubmit = e => {
    e.preventDefault();
    const newGuest = {
      name: this.state.guestName
    };
    axios
      .post('/api/users/guest', newGuest)
      .then(res => this.setState({ response: res.response.data }))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;
    if (this.state.success === true) {
      return <div>YEAH@!</div>;
    }
    return (
      <StyledForm noValidate onSubmit={this.onPostSubmit}>
        <h2>
          <label for='guestName'>Name</label>
        </h2>
        <p>
          <StyledInput
            id='guestName'
            onChange={this.onChange}
            name='guestName'
            type='text'
            placeholder='Name on Invite'
          />
        </p>
        {errors.guestName && <div>{errors.guestName}</div>}

        <StyledButton1 type='submit'>Next</StyledButton1>
      </StyledForm>
    );
  }
}

export default BasicForm;
/*
<h2>
  <label for='guestName'>Your Guests Name</label>
    </h2>
    <p>
      <StyledInput
        id='plusOne'
        onChange={props.onChange}
        name='plusOne'
        type='text'
        placeholder='Guests Name'
      />
    </p>*/
