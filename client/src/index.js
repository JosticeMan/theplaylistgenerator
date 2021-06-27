import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {playlistReducers} from "./reducers";
import {AppContainer} from "./AppContainer";

const store = createStore(
    playlistReducers,
    compose(
        applyMiddleware(thunkMiddleware) // lets us dispatch() functions
    )
)

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)
