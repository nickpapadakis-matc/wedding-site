import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledButton1 } from './StyledButton1';
import { HeaderKeyFrame } from './Styles/KeyFrames/HeadKeyFrame';
import axios from 'axios';
import StyledInput from './StyledInput';
import CheckGuest from './CheckGuest';
import GetGuestName from './GetGuestName';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestName: '',
      plusOne: '',
      food: '',
      guestFood: '',
      success: false,
      errors: {},
      firstName: '',
      lastName: ''
    };
  }

  componentDidMount() {
    this.setState({ success: false });
  }

  splitName = () => {
    let fullName = this.state.guestName.split(' ');
    this.setState({ firstName: fullName[0] });
    this.setState({ lastName: fullName[1] });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onPostSubmit = e => {
    e.preventDefault();

    const newRsvp = {
      name: this.state.guestName.toUpperCase(),
      guestName: this.state.plusOne.toUpperCase(),
      food: this.state.food,
      guestFood: this.state.guestFood
    };

    axios
      .post('/api/users/rsvp', newRsvp)
      .then(res => this.setState({ success: true }))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  onGetSubmit = e => {
    e.preventDefault();
    const checkGuest = {
      name: this.state.guestName.toUpperCase()
    };
    axios
      .post('/api/users/guest', checkGuest)
      .then(res => this.setState({ errors: res.data, success: true }))
      .catch(err => this.setState({ errors: err.response.data }));

    this.splitName();
  };

  render() {
    const { errors } = this.state;

    if (this.state.success === true) {
      return (
        <GetGuestName
          guestName={this.state.errors.guestName}
          firstName={this.state.firstName}
          onChange={this.onChange}
          onPostSubmit={this.onPostSubmit}
          food={this.state.food}
          guestFood={this.state.guestFood}
          plusOne={this.state.plusOne}
        />
      );
    }

    return (
      <CheckGuest
        onChange={this.onChange}
        onSubmit={this.onGetSubmit}
        state={this.state}
      />
    );
  }
}

export default Home;
