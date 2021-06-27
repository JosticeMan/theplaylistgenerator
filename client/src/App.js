import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {SearchPageContainer} from "./containers/SearchPageContainer";
import AppBar from "@material-ui/core/AppBar";

class App extends Component {
  render() {
    return (
        <Router>
            <AppBar className={"app-bar-container"} position="static">
                <div>
                    The Playlist Generator
                </div>
            </AppBar>
            <Switch>
                <Route exact path='/' component={SearchPageContainer} />
            </Switch>
        </Router>
    )
  }
}

export default connect(state => state)(App)
