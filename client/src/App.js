import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Theme as theme } from './components/theme/Theme';
import Header from './components/Header';
import HomeButton from './components/Homebutton';
import Home from './components/Home';
import About from './components/About';
import YourRsvp from './components/YourRsvp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'Cassie & Nicks Wedding',
      btnText: 'Get Started'
    };
  }

  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className='App'>
            <Header title={this.state.heading} />
            <Route
              exact={true}
              path='/'
              render={() => <HomeButton btnText={this.state.btnText} />}
            />
            <Route path='/Home' render={() => <Home />} />
            <Route path='/About' render={() => <About />} />
            <Route path='/YourRsvp' render={() => <YourRsvp />} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
