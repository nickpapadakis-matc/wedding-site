import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HomeButton from './components/Homebutton';
import BasicForm from './components/BasicForm';

/*
 * colors 
 #B77B82
 #FFFCD6
 #248232
 #2F4B26
 #563A21
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Nick and Cassie Get Married Is Under Construction',
      btnText: 'RSVP'
    };
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header title={this.state.heading} />
          <Route
            exact={true}
            path='/'
            render={() => <HomeButton btnText={this.state.btnText} />}
          />
          <Route path='/BasicForm' render={() => <BasicForm />} />
        </div>
      </Router>
    );
  }
}

export default App;
