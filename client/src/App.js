import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import HomeButton from './components/Homebutton';
import Home from './components/Home';
import GetGuestName from './components/GetGuestName';

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
      heading: 'Cassie & Nick Wedding',
      btnText: 'Get Started'
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
          <Route path='/Home' render={() => <Home />} />
        </div>
      </Router>
    );
  }
}

export default App;
