import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {LandingPageContainer} from "./containers/LandingPageContainer";

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={LandingPageContainer} />
            </Switch>
        </Router>
    )
  }
}

export default connect(state => state)(App)
